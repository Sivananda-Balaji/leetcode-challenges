//2634. Filter Elements from Array

var filter = function (arr, fn) {
  const results = [];
  arr.map((ele, index) => {
    if (fn(ele, index)) {
      results.push(ele);
    }
  });
  return results;
};

const fn = function greaterThan10(n) {
  return n > 10;
};

const arr = [0, 10, 20, 30];

const results = filter(arr, fn);

console.log(results);
