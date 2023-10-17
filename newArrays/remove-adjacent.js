//1047. Remove All Adjacent Duplicates In String

var removeDuplicates = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.at(-1) === s[i]) {
      stack.pop();
      continue;
    }
    stack.push(s[i]);
  }
  return stack.join("");
};

const s = "abbaca";

const result = removeDuplicates(s);

console.log(result);
