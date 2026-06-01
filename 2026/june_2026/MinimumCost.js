//2144. Minimum Cost of Buying Candies With Discount

var minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let price = 0;
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 !== 0) {
      price += cost[i];
    }
  }
  return price;
};

const cost = [6, 5, 7, 9, 2, 2];

const result = minimumCost(cost);

console.log(result);
