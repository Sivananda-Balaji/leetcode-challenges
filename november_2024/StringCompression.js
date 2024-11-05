//3163. String Compression III

var compressedString = function (word) {
  let answer = "";
  while (word.length > 0) {
    let c = word[0];
    let count = 0;
    while (word[count] === c && count < 9 && count < word.length) {
      count++;
    }
    answer += count + c;
    word = word.slice(count);
  }
  return answer;
};

const word = "aabcde";

const result = compressedString(word);

console.log(result);
