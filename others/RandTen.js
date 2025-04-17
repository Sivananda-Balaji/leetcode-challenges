//470. Implement Rand10() Using Rand7()

var rand10 = function () {
  const a = Math.floor(Math.random() * 7) + 1;
  const b = Math.floor(Math.random() * 7) + 1;
  const val = (a - 1) * 7 + b;
  if (val > 40) {
    return rand10();
  }
  return (val % 10) + 1;
};

const n = 2;

const result = rand10(n);

console.log(result);
