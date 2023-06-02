//67. Add Binary

var addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

const result = addBinary("11", "1");

console.log(result);
