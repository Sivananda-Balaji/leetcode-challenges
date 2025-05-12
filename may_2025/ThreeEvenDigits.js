//2094. Finding 3-Digit Even Numbers

var findEvenNumbers = function (digits) {
  const ans = [];
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (k = 0; k < digits.length; k++) {
        if (i === j || j === k || k === i) {
          continue;
        }
        const sum = digits[i] * 100 + digits[j] * 10 + digits[k];
        if (sum >= 100 && sum % 2 === 0 && !ans.includes(sum)) {
          ans.push(sum);
        }
      }
    }
  }
  return ans.sort((a, b) => a - b);
};

const digits = [2, 1, 3, 0];

const result = findEvenNumbers(digits);

console.log(result);
