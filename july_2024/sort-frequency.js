//1636. Sort Array by Increasing Frequency

var frequencySort = function (nums) {
  const map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  const answer = Object.entries(map).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  const result = [];
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i][1]; j++) {
      result.push(answer[i][0]);
    }
  }
  return result;
};

const nums = [1, 1, 2, 2, 2, 3];

const result = frequencySort(nums);

console.log(result);
