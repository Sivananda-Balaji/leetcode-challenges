//389. Find the Difference

var findTheDifference = function (s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return t[i];
    }
    map[t[i]] === 1 ? delete map[t[i]] : map[t[i]]--;
  }
};

const s = "abcd",
  t = "abcde";

const result = findTheDifference(s, t);
console.log(result);
