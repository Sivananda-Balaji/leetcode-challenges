//122. Best Time to Buy and Sell Stock II

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
      i++;
    }
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];

const result = maxProfit(prices);

console.log(result);
