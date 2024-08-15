//2053. Kth Distinct String in an Array

var kthDistinct = function (arr, k) {
  const map = {};
  for (let val of arr) {
    map[val] ? map[val]++ : (map[val] = 1);
  }
  let distinct = 0;
  for (let index in map) {
    if (map[index] === 1) {
      distinct++;
    }
    if (distinct === k) {
      return index;
    }
  }
  return "";
};

const arr = ["d", "b", "c", "b", "c", "a"],
  k = 2;

const result = kthDistinct(arr, k);

console.log(result);
