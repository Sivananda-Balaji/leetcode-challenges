//1356. Sort Integers by The Number of 1 Bits

var sortByBits = function (arr) {
  const compare = (a, b) => {
    const countA = a.toString(2).split("0").join("").length;
    const countB = b.toString(2).split("0").join("").length;
    if (countA === countB) {
      return a - b;
    } else {
      return countA - countB;
    }
  };

  return arr.sort(compare);
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const result = sortByBits(arr);

console.log(result);
