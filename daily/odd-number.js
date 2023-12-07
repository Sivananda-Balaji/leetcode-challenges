//1903. Largest Odd Number in String

var largestOddNumber = function (num) {
  let answer = "";
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }
  return answer;
};

const num = "239537672423884969653287101";

const result = largestOddNumber(num);

console.log(result);
