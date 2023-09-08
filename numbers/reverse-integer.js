//7. Reverse Integer

var reverse = function (x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  let answer = 0;
  let val = Math.abs(x);
  while (val !== 0) {
    const digit = val % 10;
    val = Math.floor(val / 10);

    if (answer > (INT_MAX - digit) / 10) {
      return 0;
    }
    answer = answer * 10 + digit;
  }
  if (x < 0) {
    return -answer;
  } else {
    return answer;
  }
};

const x = -2147483648;

const result = reverse(x);
console.log(result);
