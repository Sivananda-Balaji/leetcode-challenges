//796. Rotate String

var rotateString = function (s, goal) {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    s = s.slice(1) + s[0];
    if (s === goal) {
      return true;
    }
  }
  return false;
};

const s = "abcde",
  goal = "cdeab";

const result = rotateString(s, goal);

console.log(result);
