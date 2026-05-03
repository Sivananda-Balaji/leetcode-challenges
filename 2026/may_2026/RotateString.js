//796. Rotate String

var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  return (s + s).includes(goal);
};

const s = "abcde",
  goal = "cdeab";

const result = rotateString(s, goal);

console.log(result);
