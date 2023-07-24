//71. Simplify Path

var simplifyPath = function (path) {
  const elements = path.split("/");
  const stack = [];
  for (let i = 0; i < elements.length; i++) {
    const char = elements[i];
    if (char === "..") {
      if (stack.length) {
        stack.pop();
      }
    } else if (char !== "" && char !== ".") {
      stack.push(char);
    }
  }
  return stack.length === 0 ? "/" : `/${stack.join("/")}`;
};

const result = simplifyPath("/../");

console.log(result);
