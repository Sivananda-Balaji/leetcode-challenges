//2109. Adding Spaces to a String

var addSpaces = function (s, spaces) {
  let answer = "",
    index = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[index]) {
      answer += " ";
      index++;
      i--;
      continue;
    }
    answer += s[i];
  }
  return answer;
};

const s = "LeetcodeHelpsMeLearn",
  spaces = [8, 13, 15];

const result = addSpaces(s, spaces);

console.log(result);
