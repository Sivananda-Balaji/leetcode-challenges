//678. Valid Parenthesis String

var checkValidString = function (s) {
  const left = [],
    star = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left.push(i);
    } else if (s[i] === "*") {
      star.push(i);
    } else {
      if (left.length > 0) {
        left.pop();
      } else if (star.length > 0) {
        star.pop();
      } else {
        return false;
      }
    }
  }
  while (star.length > 0 && left.length > 0) {
    if (star.at(-1) > left.at(-1)) {
      star.pop();
      left.pop();
    } else {
      return false;
    }
  }
  return left.length === 0;
};

const s = "(*))";

const result = checkValidString(s);

console.log(result);
