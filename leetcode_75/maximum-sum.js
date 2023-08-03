//1161. Maximum Level Sum of a Binary Tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const arr = [1, 7, 0, 7, -8, null, null];

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

console.log(root);

var maxLevelSum = function (root) {
  const answer = [];
  const queue = [root];
  while (queue.length) {
    const temp = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.pop();
      temp.push(current.val);
      if (current.left) {
        queue.unshift(current.left);
      }
      if (current.right) {
        queue.unshift(current.right);
      }
    }
    let sum = 0;
    for (let val of temp) {
      sum += val;
    }
    answer.push(sum);
  }
  return answer.indexOf(Math.max(...answer)) + 1;
};

const result = maxLevelSum(root);
console.log(result);
