//258. Add Digits

var addDigits = function (num) {
  let result = 0;
  while (num > 0) {
    result += Math.floor(num % 10);
    num /= 10;
    if (num === 0 && result > 9) {
      num = result;
      result = 0;
    }
  }
  return result;
};

const result = addDigits(38);
console.log(result);
