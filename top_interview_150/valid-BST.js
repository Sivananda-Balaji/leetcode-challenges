//98. Validate Binary Search Tree

class TreeNode {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

const arr = [5, 1, 4, null, null, 3, 6];

const treeCreation = (arr) => {
  if (arr.length == 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const currentNode = queue.pop();

    if (arr[i] !== null) {
      currentNode.left = new TreeNode(arr[i]);
      queue.unshift(currentNode.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      currentNode.right = new TreeNode(arr[i]);
      queue.unshift(currentNode.right);
    }
    i++;
  }
  return root;
};

const root = treeCreation(arr);
console.log(root);

const BSTFunc = (root, min, max) => {
  if (root === null) {
    return true;
  }
  const node = root.val;
  if (node < min || node > max) {
    return false;
  }
  const left = BSTFunc(root.left, min, node);
  const right = BSTFunc(root.right, node, max);
  return left && right;
};

var isValidBST = function (root) {
  return BSTFunc(root, -Infinity, Infinity);
};

const result = isValidBST(root);
console.log(result);
