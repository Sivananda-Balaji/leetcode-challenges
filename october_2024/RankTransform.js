//1331. Rank Transform of an Array

var arrayRankTransform = function (arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => a - b);
  const map = {};
  let rank = 1;
  for (let i = 0; i < arr.length; i++) {
    if (!map[newArr[i]]) {
      map[newArr[i]] = rank++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      arr[i] = map[arr[i]];
    }
  }
  return arr;
};

const arr = [40, 10, 20, 30];

const result = arrayRankTransform(arr);

console.log(result);
