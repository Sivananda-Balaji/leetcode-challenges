//20. Valid Parentheses

var isValid = function (s) {
  const charArr = [];
  for (let val in s) {
    if (s[val] === "(" || s[val] === "{" || s[val] === "[") {
      charArr.push(s[val]);
    } else {
      if (
        (charArr.at(-1) === "(" && s[val] === ")") ||
        (charArr.at(-1) === "{" && s[val] === "}") ||
        (charArr.at(-1) === "[" && s[val] === "]")
      ) {
        charArr.pop();
      } else {
        return false;
      }
    }
  }
  return charArr.length === 0;
};

const result = isValid("(]");

console.log(result);
