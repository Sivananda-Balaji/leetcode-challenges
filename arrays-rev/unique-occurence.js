//1207. Unique Number of Occurrences

var uniqueOccurrences = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] ? map[arr[i]]++ : (map[arr[i]] = 1);
  }
  const set = new Set();
  for (let i in map) {
    if (!set.has(map[i])) {
      set.add(map[i]);
    } else {
      return false;
    }
  }
  return true;
};

const arr = [1, 2, 2, 1, 1, 3];

const result = uniqueOccurrences(arr);

console.log(result);
