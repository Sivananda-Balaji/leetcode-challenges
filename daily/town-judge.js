//997. Find the Town Judge

var findJudge = function (n, trust) {
  if (n == 1) {
    return n;
  }
  const counts = new Array(n + 1).fill(0);
  for (let i = 0; i < trust.length; i++) {
    const val0 = trust[i][0];
    const val1 = trust[i][1];
    counts[val0]--;
    counts[val1]++;
  }
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === n - 1) {
      return i;
    }
  }
  return -1;
};

const n = 3,
  trust = [
    [1, 3],
    [2, 3],
  ];

const result = findJudge(n, trust);

console.log(result);
