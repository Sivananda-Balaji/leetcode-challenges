//21. Merge Two Sorted Lists

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//list 1 creation
const list1 = new Node(5);
// const temp1 = new Node(2);
// const temp2 = new Node(4);

// list1.next = temp1;
// temp1.next = temp2;

//list 2 creation

const list2 = new Node(2);
const temp21 = new Node(3);
const temp22 = new Node(4);

list2.next = temp21;
temp21.next = temp22;

var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  }
  let newNode = new Node(null);
  const answer = newNode;
  if (list1 && list2 === null) {
    return list1;
  } else if (list2 && list1 === null) {
    return list2;
  } else {
    if (list1.val <= list2.val) {
      newNode.val = list1.val;
      list1 = list1.next;
    } else {
      newNode.val = list2.val;
      list2 = list2.next;
    }
  }
  let temp1 = list1;
  let temp2 = list2;
  while (temp1 && temp2) {
    if (temp1.val <= temp2.val) {
      newNode.next = temp1;
      temp1 = temp1.next;
      newNode = newNode.next;
    } else {
      newNode.next = temp2;
      temp2 = temp2.next;
      newNode = newNode.next;
    }
  }
  while (temp1 !== null) {
    newNode.next = temp1;
    temp1 = temp1.next;
    newNode = newNode.next;
  }
  while (temp2 !== null) {
    newNode.next = temp2;
    temp2 = temp2.next;
    newNode = newNode.next;
  }
  return answer;
};

const res = mergeTwoLists(list1, list2);

console.log(res);
