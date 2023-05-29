//944. Delete Columns to Make Sorted

var minDeletionSize = function (strs) {
  let count = 0;
  for (let col = 0; col < strs[0].length; col++) {
    for (let row = 0; row < strs.length - 1; row++) {
      if (strs[row][col] > strs[row + 1][col]) {
        count++;
        break;
      }
    }
  }
  return count;
};

const strs = ["rrjk", "furt", "guzm"];

const result = minDeletionSize(strs);

console.log(result);
