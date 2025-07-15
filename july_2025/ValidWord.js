//3136. Valid Word

var isValid = function (word) {
  if (word.length < 3) {
    return false;
  }
  const vowels = "aeiouAEIOU";
  const constants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let isVowels = false,
    isConsts = false;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if ("@#$".includes(letter)) {
      return false;
    } else if (vowels.includes(letter)) {
      isVowels = true;
    } else if (constants.includes(letter)) {
      isConsts = true;
    }
  }
  return isConsts && isVowels;
};

const word = "234Adas";

const result = isValid(word);

console.log(result);
