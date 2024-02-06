//1528. Shuffle String

var restoreString = function (s, indices) {
  const arr = [];
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join("");
};

const s = "codeleet",
  indices = [4, 5, 6, 7, 0, 2, 1, 3];

const result = restoreString(s, indices);

console.log(result);
