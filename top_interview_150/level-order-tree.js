//102. Binary Tree Level Order Traversal

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const binaryTree = (arr) => {
  if (!arr.length) {
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

const arr = [1, 2, 3, 4, null, null, 5];
const root = binaryTree(arr);

//console.log(root);

var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  const answer = [];
  const queue = [root];
  while (queue.length) {
    const temp = [];
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const currentNode = queue.pop();
      temp.push(currentNode.val);
      if (currentNode.left) {
        queue.unshift(currentNode.left);
      }
      if (currentNode.right) {
        queue.unshift(currentNode.right);
      }
    }
    answer.push(temp);
  }
  return answer;
};

const result = levelOrder(root);
console.log(result);
