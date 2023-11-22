//28. Find the Index of the First Occurrence in a String

var strStr = function (haystack, needle) {
  const len = haystack.length - needle.length;
  for (let i = 0; i <= len; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

const haystack = "sadbutsad",
  needle = "sad";

const result = strStr(haystack, needle);

console.log(result);
