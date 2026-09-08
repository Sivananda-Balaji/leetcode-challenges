//3870. Count Commas in Range

var countCommas = function (n) {
  return n < 1000 ? 0 : n - 999;
};

const n = 1002;

const result = countCommas(n);

console.log(result);
