// 2325. Decode the Message

var decodeMessage = function (key, message) {
  const map = {};
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let index = 0;
  for (let i = 0; i < key.length; i++) {
    const char = key[i];
    if (char !== " " && !map[char]) {
      map[char] = alphabets[index++];
    }
  }
  let answer = "";
  for (let char of message) {
    if (map[char]) {
      answer += map[char];
    } else {
      answer += " ";
    }
  }
  return answer;
};

const key = "the quick brown fox jumps over the lazy dog",
  message = "vkbs bs t suepuv";

const result = decodeMessage(key, message);

console.log(result);
