//316. Remove Duplicate Letters

var removeDuplicateLetters = function (s) {
  const lastIndex = {};
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }
  const visited = new Set();
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!visited.has(char)) {
      let len = stack.length;
      while (
        len > 0 &&
        stack[len - 1] > s[i] &&
        lastIndex[stack[len - 1]] > i
      ) {
        visited.delete(stack[len - 1]);
        stack.pop();
        len--;
      }
      stack.push(char);
      visited.add(char);
    }
  }
  return stack.join("");
};

const result = removeDuplicateLetters("cbacdcbc");

console.log(result);
