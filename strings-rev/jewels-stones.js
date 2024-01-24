//771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  let answer = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      answer++;
    }
  }
  return answer;
};

const jewels = "aA",
  stones = "aAAbbbb";

const result = numJewelsInStones(jewels, stones);

console.log(result);
