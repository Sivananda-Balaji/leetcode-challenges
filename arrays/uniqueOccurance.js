//1207. Unique Number of Occurrences

var uniqueOccurrences = function (arr) {
  const frequency = new Map();
  for (let i = 0; i < arr.length; i++) {
    frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
  }
  const frequencySet = new Set(frequency.values());
  return frequencySet.size === frequency.size;
};

const result = uniqueOccurrences([1, 2, 2, 1, 1, 3]);

console.log(result);
