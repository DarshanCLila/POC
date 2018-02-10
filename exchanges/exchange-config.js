commonMapper = require('../helpers/mappers/response-mappers/common');
krakenResponseMapper = require('../helpers/mappers/response-mappers/kraken');
gdaxResponseMapper = require('../helpers/mappers/response-mappers/gdax');

module.exports = {
  hitbtc2: {
    keys: {
      apiKey: '87fdfc8d98fb6607c15f8662a53842d5',
      secret: '9492ad09760246f2fbc7348d18e1514a',
    },
    tradesMethod: {
      name: 'fetchMyTrades',
      params: undefined,
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
  gdax: {
    keys: {
      apiKey: 'c66dca8e0429fe397caf032e54f150da',
      secret: 'SC3BSNO5Suoh53urm9Og62ZQXuUiNpBZ+sGkoPE30xvWy4BM6dnIufV6mIP6cKlqMNCR8eIkSySvpC0tvDYKKQ==',
      password: 'EV3N!NG',
    },
    tradesMethod: {
      name: 'fetchMyTrades',
      params: undefined,
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: gdaxResponseMapper.tradesResponseMapper,
    },
  },
  binance: {
    keys: {
      apiKey: 'mMhnBMSyBoMfNEf3kTGknfcvdxOx7Ot5Bacc2PjdQ9evKBTvf2TfkVKWHvaxIPIu',
      secret: 'kb9iEk0ESpLIRUDxWrzLLB1NLvJx4LrChF5MJ2HfXTChAM2emLrj7qm1hnR44FRB',
    },
    tradesMethod: {
      name: 'privateGetMyTrades',
      params: { symbol: 'LTCBTC' },
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
  bitmex: {
    keys: {
      apiKey: 'PhoeoYi4E3zXydybjw4z7Rkg',
      secret: 'bsT_rR8qoPed4FGfumRQB804O0rwhrwO5Kvds1Yo-4E6BGCK',
    },
    tradesMethod: {
      name: 'privateGetExecutionTradeHistory',
      params: undefined,
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
  quoinex: {
    keys: {
      apiKey: '320688',
      secret: 'yLfyuEz4jkUQZ2Y3QR7bYJT/AAV2BaQwW4cGH/58vjnd8Bz67wI/fYdHP7YtVciBasOLxgiOhkeDm9l59hnO/g==',
    },
    tradesMethod: {
      name: 'privateGetTrades',
      params: undefined,
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
  bithumb: {
    keys: {
      apiKey: '28fea373005626fe6a0a5747cd89aca1',
      secret: 'b2d76c3717562360f66eb9baad8f6f16',
    },
    tradesMethod: {
      name: 'privatePostInfoUserTransactions',
      params: undefined,
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
  kraken: {
    keys: {
      apiKey: 'y7My2LExaPDtPIZkoxR85CL0eLpXwj/aNEmc7qLoKMLM+7/9nHwN7neb',
      secret: 'wYVViC29mTNDjWyDnKPsZhj2BnwU/yY1FrhnLXN83YGTxj7Aq0ubOghsLcboi8OBPVQOqY0CKCipu33VAymHwA==',
    },
    tradesMethod: {
      name: 'fetchMyTrades',
      params: {},
    },
    mappers: {
      balanceResponseMapper: krakenResponseMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
  poloniex: {
    keys: {
      apiKey: '8YOTCMLW-FEKNQVVS-1REE896U-1ZLQV1YU',
      secret: '88dc164819916a82fa01d0a55483cdb43f3a59f82359394476e9bf8238c02687a3ec9b3a7af1beaa40b26582b894851ea4f8ca9d0a0b64b18e3ee2d245ca6d9d',
    },
    tradesMethod: {
      name: 'fetchMyTrades',
      params: undefined,
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
  bittrex: {
    keys: {
      apiKey: '06e6e9c54b084b1fa2f304adf314ba36',
      secret: '7d91d52456004086a77322b382b61325',
    },
    tradesMethod: {
      name: 'accountGetOrderhistory',
      params: undefined,
    },
    mappers: {
      balanceResponseMapper: commonMapper.balanceResponseMapper,
      tradesResponseMapper: commonMapper.tradesResponseMapper,
    },
  },
};
