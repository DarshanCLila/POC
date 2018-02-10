
class CommonResponseMapper {
  balanceResponseMapper(data) {
    const response = [];
    for (const coin in data.free) {
      response.push({ esusercointicker: coin, esuserbalance: data[coin].total, esuseravailable: data[coin].free, esuserhold: data[coin].used });
    }
    return response;
  }
  tradesResponseMapper(trades) {
    return [];
  }
}

module.exports = new CommonResponseMapper();
