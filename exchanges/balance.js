const ccxt = require('ccxt');
const exchangeConfig = require('./exchange-config');

// for (const exchange in exchangeConfig) {
//   const exchangeObj = new ccxt[exchange](exchangeConfig[exchange].keys);
//   exchangeObj.fetchBalance().then((data) => {
//     console.log(exchangeConfig[exchange].mappers.balanceResponseMapper(data).length, exchange);
//   }).catch((error) => {
//     console.log(error);
//   });
// }

// fetch trades
for (const exchange in exchangeConfig) {
  const exchangeObj = new ccxt[exchange](exchangeConfig[exchange].keys);

  exchangeObj[exchangeConfig[exchange].tradesMethod.name](exchangeConfig[exchange].tradesMethod.params).then((data) => {
    // console.log(exchange, 'success fetch trades');
    console.log(exchangeConfig[exchange].mappers.tradesResponseMapper(data));
    // console.log(JSON.stringify(data, null, 2));
  }).catch((error) => {
    console.log(error, exchange);
  });
}
