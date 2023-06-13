//12. Integer to Roman

var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";
  for (let i = 0; i < values.length; i++) {
    while (values[i] <= num) {
      result += symbols[i];
      num -= values[i];
    }
  }
  return result;
};

const result = intToRoman(58);
console.log(result);
