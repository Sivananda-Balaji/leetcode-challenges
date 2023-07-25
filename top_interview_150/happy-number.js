//202. Happy Number

var isHappy = function (n) {
  let slow = n,
    fast = n;
  const sumOfSquares = (num) => {
    let sum = 0;
    while (num > 0) {
      let rem = num % 10;
      sum += rem * rem;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  do {
    slow = sumOfSquares(slow);
    fast = sumOfSquares(sumOfSquares(fast));
  } while (fast !== 1 && fast !== slow);
  return fast === 1;
};

const result = isHappy(19);

console.log(result);
