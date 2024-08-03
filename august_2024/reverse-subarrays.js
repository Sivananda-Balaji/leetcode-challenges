//1460. Make Two Arrays Equal by Reversing Subarrays

var canBeEqual = function (target, arr) {
  const map = {};
  for (let val of target) {
    map[val] ? map[val]++ : (map[val] = 1);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      return false;
    } else if (map[arr[i]] > 1) {
      map[arr[i]]--;
    } else {
      delete map[arr[i]];
    }
  }
  return true;
};

const target = [1, 2, 3, 4],
  arr = [2, 4, 1, 3];

const result = canBeEqual(target, arr);

console.log(result);
