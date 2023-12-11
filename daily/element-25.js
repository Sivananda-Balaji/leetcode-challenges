//1287. Element Appearing More Than 25% In Sorted Array

var findSpecialInteger = function (arr) {
  const limit = 0.25 * arr.length;
  let count = 1;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (count > limit) {
      return arr[i];
    }
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      count = 1;
    }
  }
  return arr[0];
};

const arr = [1, 2, 3, 3];

const result = findSpecialInteger(arr);

console.log(result);
