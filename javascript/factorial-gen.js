//2803. Factorial Generator

function* factorial(n) {
  if (n === 0) {
    yield 1;
  }
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
    yield fact;
  }
}

const gen = factorial(2);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
