//1957. Delete Characters to Make Fancy String

var makeFancyString = function (s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (answer.at(-1) === s[i] && answer.at(-2) === s[i]) {
      continue;
    }
    answer.push(s[i]);
  }
  return answer.join("");
};

const s = "leeetcode";

const result = makeFancyString(s);

console.log(result);
