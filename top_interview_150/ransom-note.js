//383. Ransom Note

var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    if (map[letter] > 0) {
      map[letter]--;
    } else {
      return false;
    }
  }
  return true;
};

const ransomNote = "aa",
  magazine = "aab";
const result = canConstruct(ransomNote, magazine);
console.log(result);
