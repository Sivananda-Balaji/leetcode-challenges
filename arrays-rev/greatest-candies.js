//1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  const answer = candies.map((candy) => candy + extraCandies >= maxCandy);
  return answer;
};

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;

const result = kidsWithCandies(candies, extraCandies);

console.log(result);
