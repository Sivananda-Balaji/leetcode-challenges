//1957. Delete Characters to Make Fancy String

var makeFancyString = function (s) {
  let count = 0,
    newStr = [];
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const lastLetter = newStr.at(-1);
    if (letter === lastLetter && count < 2) {
      newStr.push(letter);
      count++;
    } else if (letter !== lastLetter) {
      newStr.push(letter);
      count = 1;
    }
  }
  return newStr.join("");
};

const s = "aaabaaaa";

const result = makeFancyString(s);

console.log(result);
