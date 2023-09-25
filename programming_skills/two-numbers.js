//2. Add Two Numbers

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head1 = new ListNode(2);
const temp11 = new ListNode(4);
const temp12 = new ListNode(3);

head1.next = temp11;
temp11.next = temp12;

const head2 = new ListNode(5);
const temp21 = new ListNode(6);
const temp22 = new ListNode(4);

head2.next = temp21;
temp21.next = temp22;

var addTwoNumbers = function (l1, l2) {
  const temp = new ListNode(0);
  let curr = temp;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    const num1 = l1 !== null ? l1.val : 0;
    const num2 = l2 !== null ? l2.val : 0;
    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  return temp.next;
};

const res = addTwoNumbers(head1, head2);

console.log(res);
