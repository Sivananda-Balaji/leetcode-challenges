//Check if Two Strings are Anagrams

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Map = {};
  const str2Map = {};
  for (let i = 0; i < str1.length; i++) {
    str1Map[str1[i]] = (str1Map[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    str2Map[str2[i]] = (str2Map[str2[i]] || 0) + 1;
  }
  for (const char in str1Map) {
    if (str1Map[char] !== str2Map[char]) {
      return false;
    }
  }
  return true;
};

const result = checkAnagrams("catm", "actn");

console.log(result);
