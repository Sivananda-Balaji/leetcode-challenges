//3838. Weighted Word Mapping

var mapWordWeights = function (words, weights) {
  let ans = "";
  for (let i = 0; i < words.length; i++) {
    const val = words[i];
    let count = 0;
    for (let j = 0; j < val.length; j++) {
      const valCode = val[j].charCodeAt(0);
      count += weights[valCode - 97];
    }
    ans += String.fromCharCode(122 - [count % 26]);
  }
  return ans;
};

const words = ["abcd", "def", "xyz"],
  weights = [
    5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7,
    7, 2,
  ];

const result = mapWordWeights(words, weights);

console.log(result);
