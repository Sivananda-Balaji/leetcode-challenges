//1404. Number of Steps to Reduce a Number in Binary Representation to One

var numSteps = function (s) {
  let num = BigInt("0b" + s);
  let answer = 0;
  if (num === 1n) {
    return answer;
  }
  while (num !== 1n) {
    if (num % 2n === 0n) {
      num = num / 2n;
    } else {
      num = num + 1n;
    }
    answer++;
  }
  return answer;
};

const s = "1101";

const result = numSteps(s);

console.log(result);
