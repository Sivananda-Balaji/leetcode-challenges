//3174. Clear Digits

var clearDigits = function (s) {
  let str = [];
  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) {
      str.push(s[i]);
    } else {
      str.pop();
    }
  }
  return str.join("");
};

const s = "cb34";

const result = clearDigits(s);

console.log(result);
