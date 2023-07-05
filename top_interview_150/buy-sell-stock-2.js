//122. Best Time to Buy and Sell Stock II

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const total = prices[i] - prices[i - 1];
    if (total > 0) {
      profit += total;
    }
  }
  return profit;
};

const result = maxProfit([1, 2, 3, 4, 5]);

console.log(result);
