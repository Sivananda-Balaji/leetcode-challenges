//3871. Count Commas in Range II

var countCommas = function (n) {
  let ans = 0;
  let start = 1000,
    comma = 1;
  while (start <= n) {
    let end = start * 1000 - 1;
    if (n < end) {
      end = n;
    }
    const val = end - start + 1;
    ans += val * comma;
    start *= 1000;
    comma += 1;
  }
  return ans;
};

const n = 5000000;

const result = countCommas(n);

console.log(result);
