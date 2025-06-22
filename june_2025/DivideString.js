//2138. Divide a String Into Groups of Size k

var divideString = function (s, k, fill) {
  const len = s.length,
    ans = [];
  let i = 0;
  while (i < len) {
    let part = s.slice(i, i + k).padEnd(k, fill);
    ans.push(part);
    i += k;
  }
  return ans;
};

const s = "abcdefghij",
  k = 3,
  fill = "x";

const result = divideString(s, k, fill);

console.log(result);
