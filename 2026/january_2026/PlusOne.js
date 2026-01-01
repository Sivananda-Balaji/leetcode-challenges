//66. Plus One

var plusOne = function (digits) {
  const len = digits.length;
  let carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      carry = 0;
      break;
    } else {
      if (digits[i] === 9) {
        digits[i] = 0;
        carry = 1;
      }
    }
  }
  if (carry) {
    digits.unshift(1);
  }
  return digits;
};

const digits = [8, 9, 9];

const result = plusOne(digits);
console.log(result);
