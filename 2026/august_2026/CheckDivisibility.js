//3622. Check Divisibility by Digit Sum and Product

var checkDivisibility = function (n) {
  let copy = n;
  let sum = 0,
    product = 1;
  while (copy > 0) {
    const last = copy % 10;
    sum += last;
    product *= last;
    copy = Math.floor(copy / 10);
  }
  const final = sum + product;
  return n % final === 0;
};

const n = 99;

const result = checkDivisibility(n);

console.log(result);
