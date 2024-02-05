//387. First Unique Character in a String

var firstUniqChar = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] ? map[char]++ : (map[char] = 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

const s = "loveleetcode";

const result = firstUniqChar(s);

console.log(result);
