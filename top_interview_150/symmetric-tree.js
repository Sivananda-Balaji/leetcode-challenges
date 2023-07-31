//101. Symmetric Tree

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const arr = [1, 2, 2, 3, 4, 4, 3];

const treeCreation = (arr) => {
  if (arr.length === 0) {
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
//console.log(root);

const symmetricFunc = (left, right) => {
  if (left === null && right === null) {
    return true;
  }
  if (left === null || right === null) {
    return false;
  }
  if (left.data !== right.data) {
    return false;
  }
  const leftSide = symmetricFunc(left.left, right.right);
  const rightSide = symmetricFunc(left.right, right.left);
  return leftSide && rightSide;
};

var isSymmetric = function (root) {
  const result = symmetricFunc(root.left, root.right);
  return result;
};

const result = isSymmetric(root);

console.log(result);
