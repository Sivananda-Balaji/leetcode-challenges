//709. To Lower Case

var toLowerCase = function (s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      let val = s.charCodeAt(i) + 32;
      answer += String.fromCharCode(val);
      continue;
    }
    answer += s[i];
  }
  return answer;
};

const s = "Hello";

const result = toLowerCase(s);

console.log(result);
