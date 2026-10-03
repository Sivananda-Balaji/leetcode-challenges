//32. Longest Valid Parentheses

var longestValidParentheses = function (s) {
  const stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    if (val === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        const currentLength = i - stack.at(-1);
        max = Math.max(max, currentLength);
      }
    }
  }
  return max;
};

const s = "(()";

const result = longestValidParentheses(s);

console.log(result);
