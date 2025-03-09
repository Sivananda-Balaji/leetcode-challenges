//2379. Minimum Recolors to Get K Consecutive Black Blocks

var minimumRecolors = function (blocks, k) {
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") {
      count++;
    }
  }
  let start = 0;
  let end = k;
  const len = blocks.length;
  let temp = count;
  while (end < len) {
    if (blocks[end] === "W") {
      temp++;
    }
    if (blocks[start] === "W") {
      temp--;
    }
    start++;
    end++;
    count = Math.min(temp, count);
  }
  return count;
};

const blocks = "BWBBWWBBBWBWWWBWWBBWBWBBWBB",
  k = 11;

const result = minimumRecolors(blocks, k);

console.log(result);
