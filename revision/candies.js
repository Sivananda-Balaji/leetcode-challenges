//1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  let largest = -Infinity;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > largest) {
      largest = candies[i];
    }
  }
  const answer = candies.map((candy) => {
    if (candy + extraCandies >= largest) {
      return true;
    } else {
      return false;
    }
  });
  return answer;
};

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;

const result = kidsWithCandies(candies, extraCandies);

console.log(result);
