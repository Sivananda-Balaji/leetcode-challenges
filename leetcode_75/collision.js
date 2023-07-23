//735. Asteroid Collision

var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    const value = asteroids[i];
    const topValue = stack.at(-1);
    if (stack.length === 0 || topValue < 0 || value > 0) {
      stack.push(value);
    } else if (topValue + value === 0) {
      stack.pop();
    } else if (Math.abs(topValue) < Math.abs(value)) {
      stack.pop();
      i--;
    }
  }
  return stack;
};

const result = asteroidCollision([-2, -2, 2, -1]);

console.log(result);
