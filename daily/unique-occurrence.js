//1207. Unique Number of Occurrences

var uniqueOccurrences = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    map[val] !== undefined ? map[val]++ : (map[val] = 1);
  }
  const mapArr = [];
  for (let index in map) {
    if (!mapArr.includes(map[index])) {
      mapArr.push(map[index]);
    } else {
      return false;
    }
  }
  return true;
};

const arr = [1, 2, 2, 1, 1, 3];
const result = uniqueOccurrences(arr);

console.log(result);
