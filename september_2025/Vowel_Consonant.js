//3541. Find Most Frequent Vowel and Consonant

var maxFreqSum = function (s) {
  const vowels = {};
  const consonants = {};
  const vowelWords = "aeiou";
  for (let i = 0; i < s.length; i++) {
    const word = s[i];
    if (vowelWords.includes(word)) {
      vowels[word] !== undefined ? vowels[word]++ : (vowels[word] = 1);
    } else {
      consonants[word] !== undefined
        ? consonants[word]++
        : (consonants[word] = 1);
    }
  }
  let vowelsMax = 0,
    consonantMax = 0;
  for (let i in vowels) {
    vowelsMax = Math.max(vowelsMax, vowels[i]);
  }
  for (let i in consonants) {
    consonantMax = Math.max(consonantMax, consonants[i]);
  }
  return vowelsMax + consonantMax;
};

const s = "successes";

const result = maxFreqSum(s);

console.log(result);
