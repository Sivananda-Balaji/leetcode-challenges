//459. Repeated Substring Pattern

var repeatedSubstringPattern = function (s) {
  const answer = s.repeat(2).slice(1, -1);
  return answer.includes(s);
};

s = "abac";
const result = repeatedSubstringPattern(s);

console.log(result);
