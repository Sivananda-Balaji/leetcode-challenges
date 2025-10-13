//2273. Find Resultant Array After Removing Anagrams

var removeAnagrams = function (words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (result.length === 0) {
      result.push(word);
    } else {
      const prev = result.at(-1);
      if (isAnagram(prev, word)) {
        continue;
      }
      result.push(word);
    }
  }
  return result;
};

const isAnagram = (word1, word2) => {
  const map = new Map();
  for (let i = 0; i < word1.length; i++) {
    const letter = word1[i];
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  for (let i = 0; i < word2.length; i++) {
    const letter = word2[i];
    if (map.get(letter) === 1) {
      map.delete(letter);
    } else if (map.get(letter) > 1) {
      map.set(letter, map.get(letter) - 1);
    } else if (!map.has(letter)) {
      return false;
    }
  }
  return map.size === 0;
};

const words = ["abba", "baba", "bbaa", "cd", "cd"];

const result = removeAnagrams(words);

console.log(result);
