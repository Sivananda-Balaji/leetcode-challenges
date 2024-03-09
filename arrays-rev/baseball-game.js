// 682. Baseball Game

var calPoints = function (operations) {
  const answer = [];
  for (let i = 0; i < operations.length; i++) {
    const value = operations[i];
    if (value === "+") {
      const val1 = Number(answer.at(-1));
      const val2 = Number(answer.at(-2));
      answer.push(val1 + val2);
    } else if (value === "D") {
      const val = Number(answer.at(-1));
      answer.push(val * 2);
    } else if (value === "C") {
      answer.pop();
    } else {
      answer.push(value);
    }
  }
  return answer.reduce((acc, num) => Number(num) + acc, 0);
};

const ops = ["5", "2", "C", "D", "+"];

const result = calPoints(ops);

console.log(result);
