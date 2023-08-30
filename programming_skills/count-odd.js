//1523. Count Odd Numbers in an Interval Range

var countOdds = function (low, high) {
  const diff = high - low;
  if (low % 2 === 0 && high % 2 == 0) {
    return Math.floor(diff / 2);
  } else {
    return Math.floor(diff / 2) + 1;
  }
};

const low = 3,
  high = 7;

const result = countOdds(low, high);

console.log(result);
