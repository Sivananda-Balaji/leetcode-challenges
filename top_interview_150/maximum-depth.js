//104. Maximum Depth of Binary Tree

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(3);

root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};

const result = maxDepth(root);
console.log(result);
