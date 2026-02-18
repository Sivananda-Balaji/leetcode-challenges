//693. Binary Number with Alternating Bits

var hasAlternatingBits = function (n) {
  let binaryNum = "";
  while (n !== 0) {
    if (n % 2 == 0) {
      binaryNum += "0";
    } else {
      binaryNum += "1";
    }
    n = Math.floor(n / 2);
  }
  return binaryNum.includes("00") || binaryNum.includes("11") ? false : true;
};

const n = 5;

const result = hasAlternatingBits(n);

console.log(result);
