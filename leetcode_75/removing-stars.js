//2390. Removing Stars From a String

var removeStars = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};

const result = removeStars("leet**cod*e");

console.log(result);
