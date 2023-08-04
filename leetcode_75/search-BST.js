//700. Search in a Binary Search Tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const createTree = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const current = queue.pop();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.unshift(current.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.unshift(current.right);
    }
    i++;
  }
  return root;
};

const arr = [4, 2, 7, 1, 3];
const root = createTree(arr);
//console.log(root);

var searchBST = function (root, val) {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  const left = searchBST(root.left, val);
  const right = searchBST(root.right, val);
  return left || right;
};

const node = searchBST(root, 2);
console.log(node);
