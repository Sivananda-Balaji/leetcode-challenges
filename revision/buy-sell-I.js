//121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let finalProfit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      const profit = prices[i] - minPrice;
      finalProfit = Math.max(profit, finalProfit);
    }
  }
  return finalProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

const result = maxProfit(prices);

console.log(result);
