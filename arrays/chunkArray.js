//2677. Chunk Array

var chunk = function (arr, size) {
  const resultArr = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr.length === size) {
      resultArr.push(tempArr);
      tempArr = [];
    }
    tempArr.push(arr[i]);
  }
  if (tempArr.length > 0) {
    resultArr.push(tempArr);
  }
  return resultArr;
};

const arr = [1, 2, 3, 4, 5];
const size = 1;

const result = chunk(arr, size);
console.log(result);
