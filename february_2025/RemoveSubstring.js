//1910. Remove All Occurrences of a Substring

var removeOccurrences = function (s, part) {
  while (s.includes(part)) {
    const index = s.indexOf(part);
    const before = s.slice(0, index);
    const after = s.slice(index + part.length);
    s = before + after;
  }
  return s;
};

const s = "daabcbaabcbc",
  part = "abc";

const result = removeOccurrences(s, part);

console.log(result);
