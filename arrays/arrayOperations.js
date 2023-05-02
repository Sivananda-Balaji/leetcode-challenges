//2011. Final Value of Variable After Performing Operations
var finalValueAfterOperations = function (operations) {
  let count = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      count++;
    } else {
      count--;
    }
  }
  return count;
};

const result = finalValueAfterOperations(["--X", "X++", "X++"]);
console.log(result);

//using reduce method
var finalValueAfterOperations1 = function (operations) {
  return operations.reduce((count, i) => {
    if (i.includes("+")) {
      count++;
    } else {
      count--;
    }
    return count;
  }, 0);
};

const result1 = finalValueAfterOperations1(["--X", "X++", "X++"]);
console.log(result1);
