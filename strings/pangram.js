//1832. Check if the Sentence Is Pangram

var checkIfPangram = function (sentence) {
  if (sentence.length < 26) {
    return false;
  }
  return new Set(sentence).size === 26;
};

const sentence =
  "jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo";
const result = checkIfPangram(sentence);
console.log(result);
