//1456. Maximum Number of Vowels in a Substring of Given Length

var maxVowels = function (s, k) {
  const vowels = "aeiou";
  let maxCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      maxCount++;
    }
  }
  let j = k;
  let count = maxCount;
  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
    if (vowels.includes(s[j - k])) {
      count--;
    }
    j++;
    maxCount = Math.max(count, maxCount);
  }
  return maxCount;
};

const s = "abciiidef",
  k = 3;

const result = maxVowels(s, k);
console.log(result);

/**
 * const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < s.length - k; i++) {
    let j = 0;
    let current = 0;
    while (j < k) {
      if (vowels.includes(s[j + i])) {
        current++;
      }
      j++;
    }
    count = Math.max(current, count);
  }
  return count;
 */
