//13. Roman to Integer

var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "V" || s[i] === "X") {
      if (s[i - 1] === "I") {
        sum += map[s[i]] - 1;
        i--;
      } else {
        sum += map[s[i]];
      }
    } else if (s[i] === "L" || s[i] === "C") {
      if (s[i - 1] === "X") {
        sum += map[s[i]] - 10;
        i--;
      } else {
        sum += map[s[i]];
      }
    } else if (s[i] === "D" || s[i] === "M") {
      if (s[i - 1] === "C") {
        sum += map[s[i]] - 100;
        i--;
      } else {
        sum += map[s[i]];
      }
    } else {
      sum += map[s[i]];
    }
  }
  return sum;
};

const s = "MCDLXXVI";
const result = romanToInt(s);

console.log(result);
