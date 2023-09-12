//19. Remove Nth Node From End of List

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

var removeNthFromEnd = function (head, n) {
  let curr = head;
  for (let i = 1; i <= n; i++) {
    curr = curr.next;
  }
  if (curr === null) {
    head = head.next;
    return head;
  }
  let node = head;
  while (curr.next !== null) {
    curr = curr.next;
    node = node.next;
  }
  node.next = node.next.next;
  return head;
};

const res = removeNthFromEnd(head, 2);
console.log(res);

/**
 * var removeNthFromEnd = function (head, n) {
  let count = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }
  count = count - n;
  if (count === 0) {
    head = head.next;
    return head;
  }
  curr = head;
  for (let i = 1; i < count; i++) {
    curr = curr.next;
  }
  if (curr !== null && curr.next !== null) {
    curr.next = curr.next.next;
  }
  return head;
};
 */
