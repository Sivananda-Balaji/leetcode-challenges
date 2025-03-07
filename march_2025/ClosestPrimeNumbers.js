//2523. Closest Prime Numbers in Range

var closestPrimes = function (left, right) {
  const primeArr = [];
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  let ans = [-1, -1];
  let diff = Infinity;
  for (let i = 0; i < primeArr.length - 1; i++) {
    if (primeArr[i + 1] - primeArr[i] < diff) {
      diff = primeArr[i + 1] - primeArr[i];
      ans = [primeArr[i], primeArr[i + 1]];
    }
  }
  return ans;
};

const left = 4,
  right = 6;

const result = closestPrimes(left, right);

console.log(result);
