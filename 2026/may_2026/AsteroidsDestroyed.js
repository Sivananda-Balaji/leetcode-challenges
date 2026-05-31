//2126. Destroying Asteroids

var asteroidsDestroyed = function (mass, asteroids) {
  asteroids.sort((a, b) => a - b);
  for (let i = 0; i < asteroids.length; i++) {
    if (mass < asteroids[i]) {
      return false;
    }
    mass += asteroids[i];
  }
  return true;
};

const mass = 10,
  asteroids = [3, 9, 19, 5, 21];

const result = asteroidsDestroyed(mass, asteroids);

console.log(result);
