//1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  const resultArr = [];
  const maxValue = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies < maxValue
      ? (resultArr[i] = false)
      : (resultArr[i] = true);
  }
  return resultArr;
};

const result = kidsWithCandies([2, 3, 5, 1, 3], 3);

console.log(result);
