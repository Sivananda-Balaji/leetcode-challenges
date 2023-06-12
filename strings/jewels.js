//771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      result++;
    }
  }
  return result;
};

const result = numJewelsInStones("z", "ZZ");
console.log(result);
