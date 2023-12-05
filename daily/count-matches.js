//1688. Count of Matches in Tournament

var numberOfMatches = function (n) {
  let answer = 0;
  let num = n;
  while (num > 1) {
    if (num % 2 === 0) {
      answer += Math.floor(num / 2);
      num = Math.floor(num / 2);
    } else {
      answer += Math.floor((num - 1) / 2);
      num = Math.floor((num - 1) / 2) + 1;
    }
  }
  return answer;
};

const n = 7;

const result = numberOfMatches(n);

console.log(result);
