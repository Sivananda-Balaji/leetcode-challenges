//150. Evaluate Reverse Polish Notation

var evalRPN = function (tokens) {
  const stack = [];
  const symbols = "+-*/";
  for (let i = 0; i < tokens.length; i++) {
    const value = tokens[i];
    if (symbols.includes(value)) {
      const val1 = Number(stack.pop());
      const val2 = Number(stack.pop());
      if (value === "+") {
        stack.push(val2 + val1);
      } else if (value === "-") {
        stack.push(val2 - val1);
      } else if (value === "*") {
        stack.push(val2 * val1);
      } else {
        stack.push(Math.trunc(val2 / val1));
      }
    } else {
      stack.push(value);
    }
  }
  return stack.pop();
};

const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

const result = evalRPN(tokens);

console.log(result);
