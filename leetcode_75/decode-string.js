//394. Decode String

var decodeString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== "]") {
      stack.push(char);
    } else {
      let subStr = "";
      while (stack.at(-1) !== "[") {
        subStr = stack.pop() + subStr;
      }
      stack.pop();
      let k = "";
      while (!isNaN(stack.at(-1))) {
        k = stack.pop() + k;
      }
      let final = "";
      for (let i = 0; i < Number(k); i++) {
        final += subStr;
      }
      stack.push(final);
    }
  }
  return stack.join("");
};

const result = decodeString("10[leetcode]");

console.log(result);
