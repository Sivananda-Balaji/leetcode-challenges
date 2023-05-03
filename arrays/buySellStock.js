//121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let profit = 0,
    lowestPrice = prices[0] || Infinity;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    } else if (profit < prices[i] - lowestPrice) {
      profit = prices[i] - lowestPrice;
    }
  }
  return profit;
};

const result = maxProfit([7, 1, 5, 3, 6, 4]);

console.log(result);
