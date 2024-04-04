//1614. Maximum Nesting Depth of the Parentheses

var maxDepth = function (s) {
  const arr = [];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push("(");
      answer = arr.length > answer ? arr.length : answer;
    } else if (s[i] === ")") {
      arr.pop();
      answer = arr.length > answer ? arr.length : answer;
    }
  }
  return answer;
};

const s = "(1+(2*3)+((8)/4))+1";

const result = maxDepth(s);

console.log(result);
