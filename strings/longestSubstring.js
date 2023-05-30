//3. Longest Substring Without Repeating Characters

//brute force approach
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  for (let left = 0; left < s.length; left++) {
    for (let right = left; right < s.length; right++) {
      const subString = s.slice(left, right + 1);
      if (new Set(subString).size === subString.length) {
        maxLength = Math.max(maxLength, subString.length);
      }
    }
  }
  return maxLength;
};

const result = lengthOfLongestSubstring("abcabcbb");

console.log(result);

//sliding window approach
var lengthOfLongestSubstring1 = function (s) {
  let maxLength = 0;
  let left = 0;
  let map = {};
  for (let right = 0; right < s.length; right++) {
    let lastChar = s[right];
    if (lastChar in map && map[lastChar] >= left) {
      left = map[lastChar] + 1;
    }
    map[lastChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

const result1 = lengthOfLongestSubstring1("abcabcbb");

console.log(result1);
