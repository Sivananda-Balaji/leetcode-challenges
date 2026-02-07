//1653. Minimum Deletions to Make String Balanced

var minimumDeletions = function (s) {
  let bCount = 0,
    deletion = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      bCount++;
    }
    if (s[i] === "a") {
      if (bCount > 0) {
        deletion = Math.min(deletion + 1, bCount);
      }
    }
  }
  return deletion;
};

const s = "bbaaaaabb";

const result = minimumDeletions(s);

console.log(result);
