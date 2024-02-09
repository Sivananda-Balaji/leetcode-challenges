//709. To Lower Case

var toLowerCase = function (s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      answer += String.fromCharCode(s[i].charCodeAt() + 32);
    } else {
      answer += s[i];
    }
  }
  return answer;
};

const s = "Hello";

const result = toLowerCase(s);

console.log(result);
