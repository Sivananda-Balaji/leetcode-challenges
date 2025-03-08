//2379. Minimum Recolors to Get K Consecutive Black Blocks

var minimumRecolors = function (blocks, k) {
  let count = Infinity;
  const len = blocks.length;
  for (let i = 0; i <= len - k; i++) {
    const val = blocks.slice(i, k + i);
    let temp = 0;
    for (let j = 0; j < val.length; j++) {
      if (val[j] === "W") {
        temp += 1;
      }
    }
    count = Math.min(temp, count);
  }
  return count;
};

const blocks = "BWBBWWBBBWBWWWBWWBBWBWBBWBB",
  k = 11;

const result = minimumRecolors(blocks, k);

console.log(result);
