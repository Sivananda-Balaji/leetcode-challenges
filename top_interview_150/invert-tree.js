class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const arr = [4, 2, 7, 1, 3, 6, 9];

const createBinaryTree = (arr) => {
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const currentNode = queue.pop();
    if (currentNode !== null) {
      currentNode.left = new TreeNode(arr[i]);
      queue.unshift(currentNode.left);
    }
    i++;
    if (i < arr.length && currentNode !== null) {
      currentNode.right = new TreeNode(arr[i]);
      queue.unshift(currentNode.right);
    }
    i++;
  }
  return root;
};

const root = createBinaryTree(arr);

//console.log(root);

//Recursive Solution
var invertTree = function (root) {
  if (root === null) {
    return root;
  }
  const newNode = root.left;
  root.left = root.right;
  root.right = newNode;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// Iterative Solution
var invertTreeIterative = function (root) {
  if (root === null) {
    return root;
  }
  const queue = [root];
  while (queue.length !== 0) {
    const currentNode = queue.pop();
    const newNode = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = newNode;
    if (currentNode.left !== null) {
      queue.unshift(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.unshift(currentNode.right);
    }
  }
  return root;
};

const invertedRoot = invertTree(root);
console.log(invertedRoot);

// const iterativeRes = invertTreeIterative(root);
// console.log(iterativeRes);
