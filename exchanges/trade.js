const ccxt = require('ccxt');

// console.log(ccxt.exchanges);

const hitbtc = new ccxt.hitbtc2({
  apiKey: '87fdfc8d98fb6607c15f8662a53842d5',
  secret: '9492ad09760246f2fbc7348d18e1514a',
});
hitbtc.fetchMyTrades().then((data) => {
  // console.log(data);
}).catch((e) => {
  console.log(e);
});

const bithumb = new ccxt.bithumb({
  apiKey: '28fea373005626fe6a0a5747cd89aca1',
  secret: 'b2d76c3717562360f66eb9baad8f6f16',
});
bithumb.privatePostInfoUserTransactions().then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e);
});

// const okex = new ccxt.okex({
//   apiKey: '7e5281a2-ec18-4798-8796-edb912f8a2fd',
//   secret: 'F362BE3B32C6C51B82CAA261A468742B',
// });
//
// okex.fetchMyTrades().then((data) => {
//   console.log(data);
// }).catch((e) => {
//   console.log(e);
// });


// okex.privateGetTrades({ symbol: 'btc_usd', date: '2018-01-01', since: -1, sign: '7E52D4D5707BC993BDCC4F79E64B9396' })
// .then((data) => {
//   console.log(JSON.stringify(data));
// })
// .catch((err) => {
//   console.log(err);
// });

try {
  // const bitz = new ccxt.bitz({
  //   apiKey: 'f3d5df9e1b4162c0b57c667a2b291d07',
  //   secret: 'df838c8f9e1d58c52498c22c0bc5ce5f',
  // });
  // console.log(bitz);
  // bitz.fetchMyTrades().then((data) => {
  //   console.log(data);
  // }).catch((e) => {
  //   console.log(e);
  // });

  // const huobi = new ccxt.huobi({
  //   apiKey: '850c46f6-2d615a14-3804d7ca-35c53',
  //   secret: '55d11629-db8bc134-88f5687c-1f14b',
  // });
  // // console.log(huobi);
  // huobi.tradePostGetOrders().then((data) => {
  //   console.log(data);
  // }).catch((e) => {
  //   console.log(e);
  // });

  // const okex = new ccxt.okex({
  //   apiKey: '7e5281a2-ec18-4798-8796-edb912f8a2fd',
  //   secret: 'F362BE3B32C6C51B82CAA261A468742B',
  // });
  // console.log(okex);
  // okex.privatePostTradeHistory({ symbol: 'eth', sign: '', date: '', since: -1 }).then((data) => {
  //   console.log(data);
  // }).catch((e) => {
  //   console.log(e);
  // });


  const bittrex = new ccxt.bittrex({
    apiKey: '06e6e9c54b084b1fa2f304adf314ba36',
    secret: '7d91d52456004086a77322b382b61325',
  });
  bittrex.accountGetOrderhistory().then((data) => {
    console.log(JSON.stringify(data, null, 2));
  }).catch((error) => {
    console.log(error);
  });

  const gdax = new ccxt.gdax({
    apiKey: 'c66dca8e0429fe397caf032e54f150da',
    secret: 'SC3BSNO5Suoh53urm9Og62ZQXuUiNpBZ+sGkoPE30xvWy4BM6dnIufV6mIP6cKlqMNCR8eIkSySvpC0tvDYKKQ==',
    password: 'EV3N!NG',
  });
  gdax.fetchMyTrades().then((data) => {
    console.log(JSON.stringify(data, null, 2));
  }).catch((error) => {
    console.log(error);
  });

  const binance = new ccxt.binance({
    apiKey: 'mMhnBMSyBoMfNEf3kTGknfcvdxOx7Ot5Bacc2PjdQ9evKBTvf2TfkVKWHvaxIPIu',
    secret: 'kb9iEk0ESpLIRUDxWrzLLB1NLvJx4LrChF5MJ2HfXTChAM2emLrj7qm1hnR44FRB',
  });
  binance.privateGetAccount({ symbol: 'LTCBTC' }).then((data) => {
    console.log(JSON.stringify(data, null, 2));
  }).catch((error) => {
    console.log(error.message, 'error 53');
  });
} catch (e) {
  console.log(e, 'err');
}


try {
  const quoinex = new ccxt.quoinex({
    apiKey: '320688',
    secret: 'yLfyuEz4jkUQZ2Y3QR7bYJT/AAV2BaQwW4cGH/58vjnd8Bz67wI/fYdHP7YtVciBasOLxgiOhkeDm9l59hnO/g==',
  });
  quoinex.privateGetTrades().then((data) => {
    console.log(data, 'data');
  }).catch((e) => {
    console.log(e);
  });
} catch (e) {
  console.log(e, 'er2');
}
