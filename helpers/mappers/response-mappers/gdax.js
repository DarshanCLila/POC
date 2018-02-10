
/*
*  [{ id: '2397281',
*     order: 'fcc92c5d-fb30-47a6-9f74-ab3738072eef',
*     info:
*      { created_at: '2017-06-19T14:17:43.277Z',
*        trade_id: 2397281,
*        product_id: 'LTC-USD',
*        order_id: 'fcc92c5d-fb30-47a6-9f74-ab3738072eef',
*        user_id: '529658ac1a7865877500013f',
*        profile_id: '06c671d0-eba3-47f5-a16d-3282544d732a',
*        liquidity: 'T',
*        price: '48.54000000',
*        size: '51.34986470',
*        fee: '7.4775672976140000',
*        side: 'buy',
*        settled: true,
*        usd_volume: null },
*     timestamp: 1497881863277,
*     datetime: '2017-06-19T14:17:43.277Z',
*     symbol: 'LTC/USD',
*     type: undefined,
*     side: 'sell',
*     price: 48.54,
*     amount: 51.3498647,
*     fee: { cost: 7.477567297614, currency: 'USD', rate: 0.003 }
*   }]
*/


class GdaxResponseMapper {
  tradesResponseMapper(trades) {
    const response = [];
    trades.forEach((trade) => {
      response.push({
        estradeid: trade.id.toString(),
        esorderid: trade.info.order_id.toString(),
        estradeprice: trade.info.price,
        estradecurrencyid: null,
        estradesize: trade.info.size,
        estradefee: trade.fee.cost,
        estradetype: trade.side.toUpperCase(),
        estradesettled: trade.info.settled,
        timestamp: trade.timestamp,
      });
    });
    return response;
  }
}

module.exports = new GdaxResponseMapper();
