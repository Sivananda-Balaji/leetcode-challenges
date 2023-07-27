//100. Same Tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const p = new TreeNode(1);

p.left = new TreeNode(2);
p.right = new TreeNode(3);

const q = new TreeNode(1);

q.left = new TreeNode(2);
q.right = new TreeNode(3);

// console.log(p);
// console.log(q);

var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  return left && right;
};

const result = isSameTree(p, q);
console.log(result);
