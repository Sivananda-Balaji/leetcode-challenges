//2114. Maximum Number of Words Found in Sentences

var mostWordsFound = function (sentences) {
  let answer = 0;
  for (let i = 0; i < sentences.length; i++) {
    const sentenceLen = sentences[i].split(" ").length;
    answer = Math.max(answer, sentenceLen);
  }
  return answer;
};

const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

const result = mostWordsFound(sentences);

console.log(result);
