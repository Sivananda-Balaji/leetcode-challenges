//3783. Mirror Distance of an Integer

var mirrorDistance = function (n) {
  let reverse = 0;
  let nCopy = n;
  while (nCopy > 0) {
    const last = nCopy % 10;
    reverse = reverse * 10 + last;
    nCopy = Math.floor(nCopy / 10);
  }
  return Math.abs(n - reverse);
};

const n = 25;

const result = mirrorDistance(n);

console.log(result);
