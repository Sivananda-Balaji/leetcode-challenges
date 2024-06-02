//344. Reverse String

var reverseString = function (s) {
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    [s[low], s[high]] = [s[high], s[low]];
    low++;
    high--;
  }
  return s;
};

const s = ["h", "e", "l", "l", "o"];

const result = reverseString(s);

console.log(result);
