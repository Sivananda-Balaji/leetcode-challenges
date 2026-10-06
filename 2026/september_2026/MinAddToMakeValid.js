//921. Minimum Add to Make Parentheses Valid

var minAddToMakeValid = function (s) {
  let left = 0,
    moves = 0;
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    if (val === "(") {
      left++;
    } else {
      if (left > 0) {
        left--;
      } else {
        moves++;
      }
    }
  }
  return left + moves;
};

const s = "())";

const result = minAddToMakeValid(s);

console.log(result);
