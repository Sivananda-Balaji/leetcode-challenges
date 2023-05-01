//1119. Remove Vowels from a String

var removeVowels = function (s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      continue;
    }
    newString += s[i];
  }
  return newString;
};

const result = removeVowels("leetcodeisacommunityforcoders");
console.log(result);
