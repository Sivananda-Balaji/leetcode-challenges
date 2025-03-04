//1780. Check if Number is a Sum of Powers of Three

var checkPowersOfThree = function (n) {
  while (n > 0) {
    if (Math.floor(n % 3) >= 2) {
      return false;
    }
    n = Math.floor(n / 3);
  }
  return true;
};

const n = 12;

const result = checkPowersOfThree(n);

console.log(result);
