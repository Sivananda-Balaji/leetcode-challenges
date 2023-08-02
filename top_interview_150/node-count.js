//222. Count Complete Tree Nodes

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const arr = [1, 2, 3, 4, 5, 6];

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

const root = createTree(arr);
//console.log(root);

var countNodes = function (root) {
  if (root === null) {
    return 0;
  }
  const left = getLeftTree(root);
  const right = getRightTree(root);
  if (left === right) {
    return Math.pow(2, left) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};

const getLeftTree = (root) => {
  let height = 0;
  while (root) {
    height++;
    root = root.left;
  }
  return height;
};
const getRightTree = (root) => {
  let height = 0;
  while (root) {
    height++;
    root = root.right;
  }
  return height;
};
const result = countNodes(root);
console.log(result);
