// 506. Relative Ranks

var findRelativeRanks = function (score) {
  const answer = new Array(score.length);
  for (let i = 0; i < score.length; i++) {
    const max = Math.max(...score);
    const index = score.indexOf(max);
    if (i === 0) {
      answer[index] = "Gold Medal";
      score[index] = null;
    } else if (i === 1) {
      answer[index] = "Silver Medal";
      score[index] = null;
    } else if (i === 2) {
      answer[index] = "Bronze Medal";
      score[index] = null;
    } else {
      answer[index] = `${i + 1}`;
      score[index] = null;
    }
  }
  return answer;
};

const score = [5, 4, 3, 2, 1];

const result = findRelativeRanks(score);

console.log(result);
