//1678. Goal Parser Interpretation

var interpret = function (command) {
  let answer = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      answer += "G";
    } else if (command[i] === "(" && command[i + 1] === ")") {
      answer += "o";
      i = i + 1;
    } else {
      answer += "al";
      i = i + 3;
    }
  }
  return answer;
};

const command = "(al)G(al)()()G";

const result = interpret(command);

console.log(result);
