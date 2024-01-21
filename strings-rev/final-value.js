//2011. Final Value of Variable After Performing Operations

var finalValueAfterOperations = function (operations) {
  let answer = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("+")) {
      answer++;
    } else {
      answer--;
    }
  }
  return answer;
};

const operations = ["--X", "X++", "X++"];

const result = finalValueAfterOperations(operations);

console.log(result);
