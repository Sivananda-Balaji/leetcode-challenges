//1346. Check If N and Its Double Exist

var checkIfExist = function (arr) {
  const map = {};
  for (let val of arr) {
    map[val] ? map[val]++ : (map[val] = 1);
  }
  for (let i = 0; i < arr.length; i++) {
    if (map[2 * arr[i]] && arr[i] !== 0) {
      return true;
    }
    if (arr[i] === 0 && map[arr[i]] > 1) {
      return true;
    }
  }
  return false;
};
const arr = [-2, 0, 10, -19, 4, 6, -8];

const result = checkIfExist(arr);

console.log(result);
