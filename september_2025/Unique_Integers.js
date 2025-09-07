//1304. Find N Unique Integers Sum up to Zero

var sumZero = function (n) {
  const res = [];
  let sum = 0;
  for (let i = 1; i < n; i++) {
    res.push(i);
    sum += i;
  }
  res.push(-sum);
  return res;
};

const n = 5;

const result = sumZero(n);

console.log(result);
