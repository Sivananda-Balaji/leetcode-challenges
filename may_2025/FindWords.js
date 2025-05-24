//2942. Find Words Containing Character

var findWordsContaining = function (words, x) {
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      ans.push(i);
    }
  }
  return ans;
};

const words = ["leet", "code"],
  x = "e";
const result = findWordsContaining(words, x);

console.log(result);
