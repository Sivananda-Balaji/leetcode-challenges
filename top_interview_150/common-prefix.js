//14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  let answer = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (answer.length && !strs[i].startsWith(answer)) {
      answer = answer.slice(0, -1);
    }
  }
  return answer;
};

const strs = [""];

const result = longestCommonPrefix(strs);
console.log(result);
