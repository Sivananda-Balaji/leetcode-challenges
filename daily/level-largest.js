//515. Find Largest Value in Each Tree Row

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);

root.left = new TreeNode(3);
root.right = new TreeNode(2);

root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);

root.right.right = new TreeNode(9);

var largestValues = function (root) {
  if (!root) {
    return [];
  }
  const queue = [root];
  const answer = [];

  while (queue.length) {
    const len = queue.length;
    let high = -Infinity;
    for (let i = 0; i < len; i++) {
      const temp = queue.pop();
      high = Math.max(temp.val, high);
      if (temp.left) {
        queue.unshift(temp.left);
      }
      if (temp.right) {
        queue.unshift(temp.right);
      }
    }
    answer.push(high);
  }
  return answer;
};

const result = largestValues(root);

console.log(result);
