//20. Valid Parentheses

var isValid = function (s) {
  const map = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      map.push(char);
    } else if (
      (char === ")" && map.at(-1) === "(") ||
      (char === "]" && map.at(-1) === "[") ||
      (char === "}" && map.at(-1) === "{")
    ) {
      map.pop();
    } else {
      return false;
    }
  }
  return map.length === 0;
};

const s = "()";

const result = isValid(s);

console.log(result);
