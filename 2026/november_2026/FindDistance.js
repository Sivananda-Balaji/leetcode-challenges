//1385. Find the Distance Value Between Two Arrays

var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    let isValid = true;
    for (let j = 0; j < arr2.length; j++) {
      const val2 = arr2[j];

      if (Math.abs(val1 - val2) <= d) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      count++;
    }
  }
  return count;
};

const arr1 = [4, 5, 8],
  arr2 = [10, 9, 1, 8],
  d = 2;

const result = findTheDistanceValue(arr1, arr2, d);

console.log(result);
