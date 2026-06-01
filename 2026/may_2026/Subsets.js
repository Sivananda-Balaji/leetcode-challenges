//78. Subsets

var subsets = function (nums) {
  const ans = [];
  const helper = (index, temp) => {
    if (index === nums.length) {
      ans.push([...temp]);
      return;
    }
    temp.push(nums[index]);
    helper(index + 1, temp);
    temp.pop();
    helper(index + 1, temp);
  };
  helper(0, []);
  return ans;
};

const nums = [1, 2, 3];

const result = subsets(nums);

console.log(result);
