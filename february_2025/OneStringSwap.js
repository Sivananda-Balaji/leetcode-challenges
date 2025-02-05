//1790. Check if One String Swap Can Make Strings Equal

var areAlmostEqual = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const arr = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      arr.push(i);
      if (arr.length > 2) {
        return false;
      }
    }
  }
  if (arr.length === 0) {
    return true;
  }
  if (arr.length !== 2) {
    return false;
  }
  const [i, j] = arr;
  return s1[i] === s2[j] && s1[j] === s2[i];
};

const s1 = "caa";
s2 = "aaz";

const result = areAlmostEqual(s1, s2);

console.log(result);
