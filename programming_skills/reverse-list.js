//206. Reverse Linked List

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
const temp1 = new ListNode(2);
const temp2 = new ListNode(3);
const temp3 = new ListNode(4);
const temp4 = new ListNode(5);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;

var reverseList = function (head) {
  let prevNode = null;
  let currNode = head;
  while (currNode !== null) {
    const nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};

const result = reverseList(head);

console.log(result);
