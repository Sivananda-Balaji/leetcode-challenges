//2144. Minimum Cost of Buying Candies With Discount

const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] >= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

const mergeSort = (cost) => {
  if (cost.length <= 1) {
    return cost;
  }
  const mid = Math.floor(cost.length / 2);
  const left = mergeSort(cost.slice(0, mid));
  const right = mergeSort(cost.slice(mid));
  return merge(left, right);
};

var minimumCost = function (cost) {
  cost = mergeSort(cost);
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
