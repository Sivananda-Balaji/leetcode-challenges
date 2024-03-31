//1160. Find Words That Can Be Formed by Characters

var countCharacters = function (words, chars) {
  let map = {};
  const reload = () => {
    for (let i = 0; i < chars.length; i++) {
      map[chars[i]] ? map[chars[i]]++ : (map[chars[i]] = 1);
    }
  };
  let full = false;
  let answer = 0;
  for (let i = 0; i < words.length; i++) {
    const char = words[i];
    map = {};
    reload();
    full = true;
    for (let j = 0; j < char.length; j++) {
      if (map[char[j]]) {
        map[char[j]] > 1 ? map[char[j]]-- : delete map[char[j]];
      } else {
        full = false;
        break;
      }
    }
    if (full) {
      answer += char.length;
    }
  }
  return answer;
};

const words = ["cat", "bt", "hat", "tree"],
  chars = "atach";

const result = countCharacters(words, chars);

console.log(result);
