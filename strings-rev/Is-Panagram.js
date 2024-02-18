//1832. Check if the Sentence Is Pangram

var checkIfPangram = function (sentence) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  if (sentence.length < 26) {
    return false;
  }
  for (let i = 0; i < alphabets.length; i++) {
    if (!sentence.includes(alphabets[i])) {
      return false;
    }
  }
  return true;
};

const sentence =
  "jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo";

const result = checkIfPangram(sentence);

console.log(result);
