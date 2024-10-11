//624. Maximum Distance in Arrays

var maxDistance = function (arrays) {
  let minVal = arrays[0][0];
    let maxVal = arrays[0][arrays[0].length - 1];
    let maxDist = 0;

    for (let i = 1; i < arrays.length; i++) {
        let currMin = arrays[i][0];
        let currMax = arrays[i][arrays[i].length - 1];
        maxDist = Math.max(maxDist, Math.abs(currMax - minVal), Math.abs(maxVal - currMin));
        minVal = Math.min(minVal, currMin);
        maxVal = Math.max(maxVal, currMax);
    }

    return maxDist;
};

const arrays = [
  [-10, -9, -9, -3, -1, -1, 0],
  [-5],
  [4],
  [-8],
  [-9, -6, -5, -4, -2, 2, 3],
  [-3, -3, -2, -1, 0],
];

const result = maxDistance(arrays);

console.log(result);
