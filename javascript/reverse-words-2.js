//186. Reverse Words in a String II

var reverseWords = function (s) {
  const reverse = (s, start, end) => {
    while (start < end) {
      [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
    }
  };
  reverse(s, 0, s.length - 1);
  let start = 0;
  let end = 0;
  for (end = 0; end < s.length; end++) {
    if (s[end] === " ") {
      reverse(s, start, end - 1);
      start = end + 1;
    }
  }
  reverse(s, start, end - 1);
  return s;
};

const s = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
];

const result = reverseWords(s);

console.log(result);
