//1207. Unique Number of Occurrences

var uniqueOccurrences = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }
  const valueSet = new Set(Object.values(map));
  return Object.values(map).length === valueSet.size;
};

const result = uniqueOccurrences([1, 2]);

console.log(result);
