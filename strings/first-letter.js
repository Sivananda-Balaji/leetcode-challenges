//2351. First Letter to Appear Twice

var repeatedCharacter = function (s) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return s[i];
    } else {
      set.add(s[i]);
    }
  }
};

const s = "abccbaacz";

const result = repeatedCharacter(s);

console.log(result);
