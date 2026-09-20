//3498. Reverse Degree of a String

var reverseDegree = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const val = (122 - s.charCodeAt(i) + 1) * (i + 1);
    sum += val;
  }
  return sum;
};

const s = "abc";

const result = reverseDegree(s);

console.log(result);
