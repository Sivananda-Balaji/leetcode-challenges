//1122. Relative Sort Array

var relativeSortArray = function (arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    while (arr1.includes(value)) {
      answer.push(value);
      const index = arr1.indexOf(value);
      arr1[index] = null;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== null) {
      answer.push(arr1[i]);
    }
  }
  return answer;
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6];

const result = relativeSortArray(arr1, arr2);

console.log(result);
