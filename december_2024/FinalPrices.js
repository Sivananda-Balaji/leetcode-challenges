// 1475. Final Prices With a Special Discount in a Shop

var finalPrices = function (prices) {
  for (let i = 0; i < prices.length; i++) {
    const value = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] < value) {
        prices[i] = value - prices[j];
        break;
      }
    }
  }
  return prices;
};

const prices = [8, 4, 6, 2, 3];

const result = finalPrices(prices);

console.log(result);
