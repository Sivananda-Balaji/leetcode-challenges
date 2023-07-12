//205. Isomorphic Strings

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sArr = [];
  const tArr = [];
  for (let i = 0; i < s.length; i++) {
    sArr.push(s.indexOf(s[i]));
    tArr.push(t.indexOf(t[i]));
    if (sArr[i] !== tArr[i]) {
      return false;
    }
  }
  return true;
};

const s = "paper",
  t = "title";

const result = isIsomorphic(s, t);
console.log(result);
