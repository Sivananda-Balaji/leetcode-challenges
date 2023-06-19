//605. Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
    if (
      (i === 0 || flowerbed[i - 1] === 0) &&
      flowerbed[i] === 0 &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n === 0;
};

const result = canPlaceFlowers([1, 0, 0, 0, 1], 2);

console.log(result);
