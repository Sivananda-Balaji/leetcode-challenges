//121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let min = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      profit = prices[i] - min > profit ? prices[i] - min : profit;
    }
  }
  return profit;
};

const result = maxProfit([3, 2, 6, 5, 0, 3]);

console.log(result);

/**
 * var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let j = i + 1;
    while (j < prices.length) {
      if (prices[i] - prices[j] < profit) {
        profit = prices[i] - prices[j];
      }
      j++;
    }
  }
  return Math.abs(profit);
};
 */
