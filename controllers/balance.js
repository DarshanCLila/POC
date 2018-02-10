const connection = require('../mysql');
const Promise = require('bluebird');
const constants = require('../config/constants');
const responseDispatcher = require('../response/responsedispatcher');
const config = require('../config');
const ccxt = require('ccxt');
const exchangeConfig = require('../exchanges/exchange-config');
const queryHelper = require('../helpers/query');

class BalanceController {
  fetchBalance(req, res) {
    connection.query(queryHelper.getUserAccountInfoByUserExchangeId(req.body.userId, req.body.exchangeId), (err, data) => {
      if (err) {
        responseDispatcher.dispatch(res, JSON.stringify({ error: err.message }), constants.HTTP_STATUS.NOTOK);
      } else if (data[0]) {
        data = JSON.parse(JSON.stringify(data[0]));
        if (data.exchangeName && exchangeConfig[data.exchangeName]) {
          const auth = { apiKey: data.apiKey, secret: data.secret };
          if (data.password && data.password !== null) auth.password = data.password;
          const exchangeObj = new ccxt[data.exchangeName](auth);
          exchangeObj.fetchBalance().then((balanceData) => {
            balanceData = exchangeConfig[data.exchangeName].mappers.balanceResponseMapper(balanceData);
            balanceData.forEach((balance) => {
              connection.query(queryHelper.checkForBalanceInfo(data.userAccountId, balance.esusercointicker), (err, balanceInfo) => {
                if (!err) {
                  balanceInfo = JSON.parse(JSON.stringify(balanceInfo));
                  const query = (balanceInfo[0]) ? queryHelper.updateBalanceData(balanceInfo[0].id, balance) : queryHelper.insertBalanceData(data.userAccountId, balance);
                  connection.query(query, (err) => {
                    if (err) console.log(err);
                  });
                } else {
                  console.log(err);
                }
              });
            });
            responseDispatcher.dispatch(res, JSON.stringify({ success: true, data: balanceData }), constants.HTTP_STATUS.NOTOK);
          }).catch((error) => {
            console.log(error);
            responseDispatcher.dispatch(res, JSON.stringify({ success: false, error: error.message }), constants.HTTP_STATUS.NOTOK);
          });
        } else {
          console.log(data);
          responseDispatcher.dispatch(res, JSON.stringify({ success: false, error: 'something went wrong!!' }), constants.HTTP_STATUS.NOTOK);
        }
      } else {
        responseDispatcher.dispatch(res, JSON.stringify({ success: false, error: 'Please provide valid data' }), constants.HTTP_STATUS.NOTOK);
      }
    });
  }
}

module.exports = new BalanceController();
