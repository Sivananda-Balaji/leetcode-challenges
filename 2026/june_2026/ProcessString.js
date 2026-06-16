//3612. Process String with Special Operations I

var processStr = function (s) {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    if (val >= "a" && val <= "z") {
      ans.push(val);
    } else if (val === "#") {
      ans.push(...ans);
    } else if (val === "%") {
      ans.reverse();
    } else if (val === "*") {
      ans.pop();
    }
  }
  return ans.join("");
};

const s = "a#b%*";

const result = processStr(s);

console.log(result);
