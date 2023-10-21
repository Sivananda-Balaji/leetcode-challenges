//24. Swap Nodes in Pairs

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

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;

var swapPairs = function (head) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  while (head && head.next) {
    const first = head;
    const second = head.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
    head = first.next;
  }
  return dummy.next;
};

const result = swapPairs(head);

console.log(result);
