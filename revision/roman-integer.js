//13. Roman to Integer

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letter === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
      let next = s[++i];
      let val = map[next];
      val = val - 1;
      answer += val;
    } else if (letter === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
      let next = s[++i];
      let val = map[next];
      val = val - 10;
      answer += val;
    } else if (letter === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
      let next = s[++i];
      let val = map[next];
      val = val - 100;
      answer += val;
    } else {
      answer += map[letter];
    }
  }
  return answer;
};

const s = "MCMXCIV";

const result = romanToInt(s);

console.log(result);
