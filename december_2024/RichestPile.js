//2558. Take Gifts From the Richest Pile

var pickGifts = function (gifts, k) {
  const findMaxIndex = (gifts) => {
    let max = -1;
    let maxIndex = -1;
    for (let i = 0; i < gifts.length; i++) {
      if (gifts[i] > max) {
        max = gifts[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  };
  for (let i = 0; i < k; i++) {
    const maxIndex = findMaxIndex(gifts);
    gifts[maxIndex] = Math.floor(Math.sqrt(gifts[maxIndex]));
  }
  return gifts.reduce((acc, val) => acc + val, 0);
};

const gifts = [25, 64, 9, 4, 100],
  k = 4;

const result = pickGifts(gifts, k);

console.log(result);
