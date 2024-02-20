//344. Reverse String

var reverseString = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

const s = ["h", "e", "l", "l", "o"];

const result = reverseString(s);

console.log(result);
