//605. Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {
  if (n <= 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (flowerbed[i + 1] === 0 || i === flowerbed.length - 1)
      ) {
        n--;
        flowerbed[i] = 1;
      }
    }
    if (n <= 0) {
      return true;
    }
  }
  return false;
};

const flowerbed = [1, 0, 0, 0, 1],
  n = 2;
const result = canPlaceFlowers(flowerbed, n);

console.log(result);
