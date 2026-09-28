//1614. Maximum Nesting Depth of the Parentheses

var maxDepth = function (s) {
  let maxValue = 0,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      maxValue = Math.max(maxValue, count);
    } else if (s[i] === ")") {
      count--;
    }
  }
  return maxValue;
};

const s = "(1+(2*3)+((8)/4))+1";

const result = maxDepth(s);

console.log(result);
