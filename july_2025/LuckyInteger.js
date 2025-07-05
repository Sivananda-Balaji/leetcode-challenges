//1394. Find Lucky Integer in an Array

var findLucky = function (arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] !== undefined ? map[arr[i]]++ : (map[arr[i]] = 1);
  }
  let ans = -1;
  for (let i in map) {
    if (map[i] === Number(i) && Number(i) > ans) {
      ans = Number(i);
    }
  }
  return ans;
};

const arr = [1, 2, 2, 3, 3, 3];

const result = findLucky(arr);

console.log(result);
