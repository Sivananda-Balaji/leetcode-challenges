//387. First Unique Character in a String

var firstUniqChar = function (s) {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) {
      count[s[i]] = 1;
    } else {
      count[s[i]]++;
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (count[s[j]] === 1) {
      return j;
    }
  }
  return -1;
};

const result = firstUniqChar("aabb");

console.log(result);
