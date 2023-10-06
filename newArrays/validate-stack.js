//946. Validate Stack Sequences

var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let num1 = 0,
    num2 = 0;
  while (num1 < pushed.length && num2 < popped.length) {
    if (stack.at(-1) === popped[num2]) {
      stack.pop();
      num2++;
      continue;
    }
    if (num1 < pushed.length) {
      stack.push(pushed[num1]);
      num1++;
    }
  }
  while (num2 < popped.length) {
    if (stack.at(-1) === popped[num2]) {
      stack.pop();
      num2++;
      continue;
    }
    num2++;
  }
  return stack.length === 0;
};

const pushed = [1, 2, 3, 4, 5];
popped = [4, 5, 3, 2, 1];

const result = validateStackSequences(pushed, popped);

console.log(result);
