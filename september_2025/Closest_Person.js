//3516. Find Closest Person

var findClosest = function (x, y, z) {
  const xDiff = Math.abs(z - x);
  const yDiff = Math.abs(z - y);
  return xDiff < yDiff ? 1 : yDiff < xDiff ? 2 : 0;
};

const x = 2,
  y = 7,
  z = 4;

const result = findClosest(x, y, z);

console.log(result);
