
class QuoinexResponseMapper {
  balanceResponseMapper(data) {
const response = [];
for (const coin in data.free) {
  response.push({ esusercointicker: coin, esuserbalance: data[coin].total, esuseravailable: data[coin].free, esuserhold: data[coin].used });
}
return response;;
  }
}

module.exports = new QuoinexResponseMapper();
