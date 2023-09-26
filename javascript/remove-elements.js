//203. Remove Linked List Elements

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
const temp1 = new ListNode(2);
const temp2 = new ListNode(6);
const temp3 = new ListNode(3);
const temp4 = new ListNode(4);
const temp5 = new ListNode(5);
const temp6 = new ListNode(6);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp5;
temp5.next = temp6;

var removeElements = function (head, val) {
  let temp = new ListNode(-1);
  temp.next = head;
  let curr = temp;
  while (curr !== null) {
    if (curr && curr.next && curr.next.val === val) {
      curr.next = curr.next.next;
      continue;
    }
    curr = curr.next;
  }
  return temp.next;
};

const result = removeElements(head, 6);

console.log(result);
