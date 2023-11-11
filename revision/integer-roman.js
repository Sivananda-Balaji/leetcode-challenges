//12. Integer to Roman

var intToRoman = function (num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let answer = "";

  for (let i in map) {
    while (map[i] <= num) {
      num -= map[i];
      answer += i;
    }
  }
  return answer;
};

const num = 3;

const result = intToRoman(num);

console.log(result);
