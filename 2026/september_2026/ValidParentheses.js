//20. Valid Parentheses

var isValid = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    const arrVal = arr.at(-1);
    if (val === "(" || val === "{" || val === "[") {
      arr.push(val);
    } else if (
      (val === ")" && arrVal === "(") ||
      (val === "}" && arrVal === "{") ||
      (val === "]" && arrVal === "[")
    ) {
      arr.pop();
    } else {
      return false;
    }
  }
  return arr.length === 0;
};

const s = "(]";

const result = isValid(s);

console.log(result);
