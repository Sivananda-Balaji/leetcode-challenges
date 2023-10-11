//347. Top K Frequent Elements

var topKFrequent = function (nums, k) {
  let map = {};
  for (let val of nums) {
    map[val] ? map[val]++ : (map[val] = 1);
  }
  let mapArray = Object.entries(map).sort((a, b) => b[1] - a[1]);
  const answer = mapArray.slice(0, k).map((item) => item[0]);

  return answer;
};

const nums = [3, 1, 1, 1, 2, 2],
  k = 2;

const result = topKFrequent(nums, k);
console.log(result);
