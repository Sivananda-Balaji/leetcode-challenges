//1221. Split a String in Balanced Strings

var balancedStringSplit = function (s) {
  let rCount = 0;
  let lCount = 0;
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      rCount++;
    } else if (s[i] === "L") {
      lCount++;
    }
    if (rCount === lCount) {
      answer++;
    }
  }
  return answer;
};

const s = "RLRRLLRLRL";

const result = balancedStringSplit(s);

console.log(result);
