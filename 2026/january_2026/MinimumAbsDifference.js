//1200. Minimum Absolute Difference

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    minDiff = Math.min(minDiff, arr[i + 1] - arr[i]);
  }
  const ans = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff === minDiff) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }
  return ans;
};

const arr = [3, 8, -10, 23, 19, -4, -14, 27];

const result = minimumAbsDifference(arr);

console.log(result);
