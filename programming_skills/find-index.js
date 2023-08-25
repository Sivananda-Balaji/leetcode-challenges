//28. Find the Index of the First Occurrence in a String

var strStr = function (haystack, needle) {
  const lps = buildLPSArray(needle);
  const n = haystack.length;
  let i = 0;
  let j = 0;
  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }
    if (j === needle.length) {
      return i - j;
    } else if (i < n && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
};

const buildLPSArray = (str) => {
  const answer = [0];
  let len = 0;
  let i = 1;
  while (i < str.length) {
    if (str[i] === str[len]) {
      len++;
      answer[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = answer[len - 1];
      } else {
        answer[i] = 0;
        i++;
      }
    }
  }
  return answer;
};

const haystack = "sadbutsad",
  needle = "sad";
const result = strStr(haystack, needle);

console.log(result);
