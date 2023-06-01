//2703. Return Length of Arguments Passed

var argumentsLength = function (...args) {
  return args.length;
};

const result = argumentsLength(1, 2, 3);

console.log(result);
