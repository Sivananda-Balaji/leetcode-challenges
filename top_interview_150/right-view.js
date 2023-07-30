//199. Binary Tree Right Side View

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const arr = [1, 2, 3, null, 5, null, 4];

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

const root = binaryTree(arr);

//console.log(root);

var rightSideView = function (root) {
  if (root === null) {
    return [];
  }
  const answer = [];
  let current = [];
  if (root !== null) {
    current.push(root);
  }
  while (current.length) {
    answer.push(current[current.length - 1].val);
    const next = [];
    for (let i = 0; i < current.length; i++) {
      if (current[i].left) {
        next.push(current[i].left);
      }
      if (current[i].right) {
        next.push(current[i].right);
      }
    }
    current = next;
  }
  return answer;
};

const result = rightSideView(root);
console.log(result);
