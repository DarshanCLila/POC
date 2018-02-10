const connection = require('../mysql');
const Promise = require('bluebird');
const constants = require('../config/constants');
const responseDispatcher = require('../response/responsedispatcher');
const config = require('../config');
const ccxt = require('ccxt');
const exchangeConfig = require('../exchanges/exchange-config');
const queryHelper = require('../helpers/query');

class TradeController {
  fetchTrades(req, res) {
    connection.query(queryHelper.getUserAccountInfoByUserExchangeId(req.body.userId, req.body.exchangeId), (err, data) => {
      if (err) {
        console.log(err);
        responseDispatcher.dispatch(res, JSON.stringify({ error: err.message }), constants.HTTP_STATUS.NOTOK);
      } else if (data[0]) {
        data = JSON.parse(JSON.stringify(data[0]));
        if (data.exchangeName && exchangeConfig[data.exchangeName]) {
          const auth = { apiKey: data.apiKey, secret: data.secret };
          if (data.password && data.password !== null) auth.password = data.password;
          const exchangeObj = new ccxt[data.exchangeName](auth);

          exchangeObj[exchangeConfig[data.exchangeName].tradesMethod.name](req.body.params).then((tradesData) => {
            tradesData = exchangeConfig[data.exchangeName].mappers.tradesResponseMapper(tradesData);
            // console.log(tradesData);
            tradesData.forEach((trade) => {
              connection.query(queryHelper.checkForTradeInfo(data.userAccountId, trade.esusercointicker), (err, tradeInfo) => {
                if (err) {
                  console.log(err);
                } else {
                  tradeInfo = JSON.parse(JSON.stringify(tradeInfo));
                  const query = (tradeInfo[0]) ? queryHelper.updateTradeData(tradeInfo[0].id, trade) : queryHelper.insertTradeData(data.userAccountId, trade);
                  connection.query(query, (err) => {
                    if (err) console.log(err);
                  });
                }
              });
            });
            responseDispatcher.dispatch(res, JSON.stringify({ success: true, data: tradesData }), constants.HTTP_STATUS.NOTOK);
          }).catch((error) => {
            console.log(error);
            responseDispatcher.dispatch(res, JSON.stringify({ success: false, error: error.message }), constants.HTTP_STATUS.NOTOK);
          });
          // responseDispatcher.dispatch(res, JSON.stringify({ success: true, message: 'success' }), constants.HTTP_STATUS.NOTOK);
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

module.exports = new TradeController();
