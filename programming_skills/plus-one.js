//66. Plus One

var plusOne = function (digits) {
  let one = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      break;
    }
  }
  one && digits.unshift(1);
  return digits;
};

const digits = [9, 8];

const result = plusOne(digits);

console.log(result);
