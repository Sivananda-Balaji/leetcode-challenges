//28. Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
const haystack = "leetcode",
  needle = "leeto";
const result = strStr(haystack, needle);
console.log(result);
