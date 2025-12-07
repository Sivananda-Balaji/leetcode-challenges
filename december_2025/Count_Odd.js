//1523. Count Odd Numbers in an Interval Range

var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
};

const low = 3,
  high = 7;

const result = countOdds(low, high);
console.log(result);
