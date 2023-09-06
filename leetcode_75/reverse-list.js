//206. Reverse Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
const temp1 = new Node(2);
const temp2 = new Node(3);
const temp3 = new Node(4);
const temp4 = new Node(5);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;

var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const res = reverseList(head);

console.log(res);
