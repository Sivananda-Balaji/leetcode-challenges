//1550. Three Consecutive Odds

var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i <= arr.length - 3; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];

const result = threeConsecutiveOdds(arr);

console.log(result);
