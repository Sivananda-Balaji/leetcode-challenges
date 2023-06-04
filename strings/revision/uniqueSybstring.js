//3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let length = 0;
  const map = {};
  for (let end = 0; end < s.length; end++) {
    const current = s[end];
    if (current in map) {
      start = Math.max(start, map[current] + 1);
    }
    map[current] = end;
    length = Math.max(length, end - start + 1);
  }
  return length;
};

const result = lengthOfLongestSubstring("abcabcbb");

console.log(result);
