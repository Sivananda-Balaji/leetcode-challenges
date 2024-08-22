//476. Number Complement

var findComplement = function (num) {
  const binNum = num.toString(2);
  let result = "";
  for (let i = 0; i < binNum.length; i++) {
    if (binNum[i] === "0") {
      result += "1";
    } else {
      result += "0";
    }
  }
  return parseInt(result, 2);
};

const num = 5;

const result = findComplement(num);

console.log(result);
