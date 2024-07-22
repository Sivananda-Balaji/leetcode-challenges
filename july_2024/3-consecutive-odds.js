//1550. Three Consecutive Odds

var threeConsecutiveOdds = function (arr) {
  let count = 0;
  count = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (count < 3) {
        count++;
        if (count === 3) {
          return true;
        }
      }
    } else {
      count = 0;
    }
  }
  return count === 3;
};

const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];

const result = threeConsecutiveOdds(arr);

console.log(result);
