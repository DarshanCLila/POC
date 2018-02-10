class QueryHelper {
  getUserAccountInfoByUserExchangeId(userId, exchangeId) {
    return 'select useraccounts.id as userAccountId, exchanges.esexchangename ' +
      'as exchangeName, exchanges.id as exchangeId, exchangeuserinfo.esexchangeaccesskey as apiKey, ' +
      'exchangeuserinfo.esexchangesecretkey as secret, exchangeuserinfo.esexchangepassphrase as password from ' +
      `useraccounts, exchanges, exchangeuserinfo where useraccounts.esuserid = ${userId} and ` +
      `useraccounts.esexchangeid = ${exchangeId} and exchanges.id = useraccounts.esexchangeid ` +
      'and useraccounts.id = exchangeuserinfo.esuseraccountid';
  }

  checkForBalanceInfo(userAccountId, ticker) {
    return `select id from userbalance where esuseraccountid = ${userAccountId} and esusercointicker = '${ticker}'`;
  }

  insertBalanceData(userAccountId, data) {
    return 'insert into userbalance(esuseraccountid, esusercointicker, esuserbalance, esuseravailable, esuserhold) ' +
    `values(${userAccountId}, '${data.esusercointicker}', ${data.esuserbalance}, ${data.esuseravailable}, ${data.esuserhold})`;
  }

  updateBalanceData(updateId, data) {
    return `update userbalance set esuserbalance = ${data.esuserbalance}, esuseravailable ` +
    `= ${data.esuseravailable}, esuserhold = ${data.esuserhold}, updatedAt = CURRENT_TIMESTAMP where id = ${updateId} `;
  }

  checkForTradeInfo(userId, tradeId) {
    return `select id from usertradehistory where esuseraccountid = ${userId} and estradeid = '${tradeId}'`;
  }

  insertTradeData(userAccountId, trade) {
    return 'insert into usertradehistory(esuseraccountid, estradeid, esorderid, estradeprice, estradecurrencyid, estradesize,' +
    ' estradefee, estradetype, estradesettled, timestamp) ' +
    `values(${userAccountId}, '${trade.estradeid}', '${trade.esorderid}', ` +
     `${trade.estradeprice}, null, ${trade.estradesize}, ${trade.estradefee}, '${trade.estradetype}',` +
     ` ${trade.estradesettled}, '${trade.timestamp}')`;
  }

  updateTradeData(updateId, trade) {
    return `update usertradehistory set estradeid = '${trade.estradeid}', esorderid = ` +
    `'${trade.esorderid}', estradeprice = ${trade.estradeprice}, ` +
    `estradesize = ${trade.estradesize}, estradefee = ${trade.estradefee}, ` +
    `estradetype = '${trade.estradetype}', estradesettled = ${trade.estradesettled}, ` +
    `timestamp = '${trade.timestamp}' where id = ${updateId}`;
  }
}

module.exports = new QueryHelper();
