//3330. Find the Original Typed String I

var possibleStringCount = function (word) {
  let count = 0;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      count++;
    }
  }
  return count + 1;
};

const word = "abbcccc";

const result = possibleStringCount(word);

console.log(result);
