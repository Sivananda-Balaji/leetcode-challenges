//682. Baseball Game

var calPoints = function (operations) {
  const answer = [];
  for (let val of operations) {
    switch (val) {
      case "+":
        const num1 = answer.pop();
        const num2 = answer.pop();
        answer.push(num2, num1, num1 + num2);
        break;
      case "D":
        const num = answer.pop();
        answer.push(num, num * 2);
        break;
      case "C":
        answer.pop();
        break;
      default:
        answer.push(Number(val));
    }
  }
  const res = answer.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  return res;
};

const ops = ["5", "2", "C", "D", "+"];

const result = calPoints(ops);

console.log(result);
