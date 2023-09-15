//796. Rotate String

var rotateString = function (s, goal) {
  const str = s + s;
  return s.length === goal.length && str.includes(goal);
};

const s = "abcde",
  goal = "cdeab";

const result = rotateString(s, goal);

console.log(result);
