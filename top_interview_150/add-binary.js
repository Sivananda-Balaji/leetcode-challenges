//67. Add Binary

var addBinary = function (a, b) {
  let num1 = BigInt("0b" + b);
  let num2 = BigInt("0b" + a);
  while (num2 || num2 === undefined) {
    const carry = num1 & num2;
    num1 = num1 ^ num2;
    num2 = carry << BigInt("0b1");
  }
  return num1.toString(2);
};

const a = "11",
  b = "1";

const result = addBinary(a, b);

console.log(result);
