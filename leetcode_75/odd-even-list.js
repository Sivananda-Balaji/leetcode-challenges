//328. Odd Even Linked List

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

var oddEvenList = function (head) {
  if (head === null) {
    return head;
  }
  let odd = head;
  let even = head.next || null;
  let temp1 = odd,
    temp2 = even;
  while (temp1.next !== null && temp2.next !== null) {
    temp1.next = temp2.next;
    temp1 = temp1.next;
    temp2.next = temp1.next;
    temp2 = temp2.next;
  }
  temp1.next = even;
  return head;
};

const res = oddEvenList(head);

console.log(res);
