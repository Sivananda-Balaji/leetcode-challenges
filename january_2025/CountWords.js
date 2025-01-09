//2185. Counting Words With a Given Prefix

var prefixCount = function (words, pref) {
  let answer = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      answer++;
    }
  }
  return answer;
};

const words = ["pay", "attention", "practice", "attend"],
  pref = "at";

const result = prefixCount(words, pref);

console.log(result);
