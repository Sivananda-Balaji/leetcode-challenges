//844. Backspace String Compare

var backspaceCompare = function (s, t) {
  const stackVal = (s, stack) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "#") {
        stack.push(s[i]);
      } else {
        stack.pop();
      }
    }
    return stack;
  };
  const sStack = stackVal(s, []);
  const tStack = stackVal(t, []);
  return sStack.join("") === tStack.join("");
};

const s = "ab#c",
  t = "ad#c";

const result = backspaceCompare(s, t);

console.log(result);
