//3042. Count Prefix and Suffix Pairs I

var countPrefixSuffixPairs = function (words) {
  let answer = 0;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        answer++;
      }
    }
  }
  return answer;
};

const words = ["a", "aba", "ababa", "aa"];

const result = countPrefixSuffixPairs(words);

console.log(result);
