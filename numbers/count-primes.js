//204. Count Primes

var countPrimes = function (n) {
  if (n <= 2) {
    return 0;
  }
  const answer = new Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    if (answer[i]) {
      for (let j = i * i; j < n; j += i) {
        answer[j] = false;
      }
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (answer[i]) {
      count++;
    }
  }
  return count;
};

const result = countPrimes(10);

console.log(result);
