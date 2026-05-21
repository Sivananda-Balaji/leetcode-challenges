//3043. Find the Length of the Longest Common Prefix

var longestCommonPrefix = function (arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  const arr1Set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    const arr1Str = String(arr1[i]);
    let val = "";
    for (let j = 0; j < arr1Str.length; j++) {
      val += arr1Str[j];
      if (!arr1Set.has(val)) {
        arr1Set.add(val);
      }
    }
  }
  let max = 0;
  for (let i = 0; i < len2; i++) {
    const arr2Str = String(arr2[i]);
    let val = "";
    let count = 0;
    for (let j = 0; j < arr2Str.length; j++) {
      val += arr2Str[j];
      if (!arr1Set.has(val)) {
        break;
      }
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
};

const arr1 = [1, 10, 100],
  arr2 = [1000];

const result = longestCommonPrefix(arr1, arr2);

console.log(result);
