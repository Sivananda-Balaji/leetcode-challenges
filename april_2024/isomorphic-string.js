//205. Isomorphic Strings

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (!sMap[sChar] && !tMap[tChar]) {
      sMap[sChar] = tChar;
      tMap[tChar] = sChar;
    } else if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
      return false;
    }
  }
  return true;
};

const s = "egg",
  t = "add";

const result = isIsomorphic(s, t);

console.log(result);
