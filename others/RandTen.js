//470. Implement Rand10() Using Rand7()

var rand10 = function () {
  let a, b, val;
  do {
    a = Math.floor(Math.random() * 7) + 1;
    b = Math.floor(Math.random() * 7) + 1;
    val = (a - 1) * 7 + b;
  } while (val > 40);
  return 1 + ((val - 1) % 10);
};

const n = 2;

const result = rand10(n);

console.log(result);
