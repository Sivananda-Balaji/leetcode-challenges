//14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let commonStr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(commonStr) !== 0) {
      commonStr = commonStr.slice(0, commonStr.length - 1);
    }
  }
  return commonStr;
};

const result = longestCommonPrefix([""]);
console.log(result);
