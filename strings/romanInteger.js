//13. Roman to Integer
var romanToInt = function (s) {
  const symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  for (let i = 0; i < s.length; i++) {
    let currVal = symbolValues[s[i]];
    let nextVal = symbolValues[s[i + 1]];
    if (nextVal > currVal) {
      value += nextVal - currVal;
      i++;
    } else {
      value += currVal;
    }
  }
  return value;
};

const result = romanToInt("MCMXCIV");

console.log(result);
