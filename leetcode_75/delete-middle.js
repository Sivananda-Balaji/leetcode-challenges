//2095. Delete the Middle Node of a Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new Node(1);
const temp1 = new Node(3);
const temp2 = new Node(4);
const temp3 = new Node(7);
const temp4 = new Node(1);
const temp5 = new Node(2);
const temp6 = new Node(6);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp5;
temp5.next = temp6;

var deleteMiddle = function (head) {
  if (head.next === null) {
    return null;
  }
  let count = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }
  const middle = Math.floor(count / 2);
  curr = head;
  for (let i = 0; i < middle - 1; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
};

const res = deleteMiddle(head);

console.log(res);
