//1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  let largest = -Infinity;
  for (let candy of candies) {
    if (candy > largest) {
      largest = candy;
    }
  }
  const answer = candies.map((candy) => {
    return candy + extraCandies >= largest;
  });
  return answer;
};

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;

const result = kidsWithCandies(candies, extraCandies);

console.log(result);
