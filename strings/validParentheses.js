//20. Valid Parentheses

var isValid = function (s) {
  const balance = [];
  const pairs = { "(": ")", "[": "]", "{": "}" };
  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      balance.push(s[i]);
    } else if (pairs[balance.pop()] !== s[i]) {
      return false;
    }
  }
  return balance.length === 0;
};

const result = isValid("()[]{}");
console.log(result);
