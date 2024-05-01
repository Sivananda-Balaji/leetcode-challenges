//2000. Reverse Prefix of Word

var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);
  const sub = word
    .slice(0, index + 1)
    .split("")
    .reverse()
    .join("");
  const rem = word.slice(index + 1);
  return sub + rem;
};

const word = "abcdefd",
  ch = "d";

const result = reversePrefix(word, ch);

console.log(result);
