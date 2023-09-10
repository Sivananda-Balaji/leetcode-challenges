//83. Remove Duplicates from Sorted List

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
const temp1 = new ListNode(1);
const temp2 = new ListNode(2);
const temp3 = new ListNode(3);
const temp4 = new ListNode(3);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;

var deleteDuplicates = function (head) {
  if (head === null) {
    return null;
  }
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

const res = deleteDuplicates(head);

console.log(res);
