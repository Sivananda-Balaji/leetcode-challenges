//1317. Convert Integer to the Sum of Two No-Zero Integers

var getNoZeroIntegers = function (n) {
  let first = 1;
  let second = n - first;
  while (String(second).includes("0") || String(first).includes("0")) {
    first += 1;
    second = n - first;
  }
  return [first, second];
};

const n = 11;

const result = getNoZeroIntegers(n);

console.log(result);
