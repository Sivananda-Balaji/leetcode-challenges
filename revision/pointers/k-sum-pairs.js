//1679. Max Number of K-Sum Pairs

var maxOperations = function (nums, k) {
  const map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  let count = 0;
  for (let num of nums) {
    const comp = k - num;
    if (map[num] > 0 && map[comp] > 0) {
      if (num === comp && map[num] < 2) {
        continue;
      }
      count++;
      map[comp]--;
      map[num]--;
    }
  }
  return count;
};

const nums = [1, 2, 3, 4],
  k = 5;

const result = maxOperations(nums, k);

console.log(result);
