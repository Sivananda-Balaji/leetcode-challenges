//3120. Count the Number of Special Characters I

var numberOfSpecialChars = function (word) {
  const set = new Set(word);
  let count = 0;
  for (let index of set) {
    const charCode = index.charCodeAt(0);
    if (charCode >= 65 && charCode < 97) {
      const lowerCaseCode = charCode + 32;
      const lowerCase = String.fromCharCode(lowerCaseCode);
      if (set.has(lowerCase)) {
        count++;
      }
    }
  }
  return count;
};

const word = "aaAbcBC";

const result = numberOfSpecialChars(word);

console.log(result);
