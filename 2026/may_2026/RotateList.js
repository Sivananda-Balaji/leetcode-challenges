//61. Rotate List

var rotateRight = function (head, k) {
  if (head === null || head.next === null || k === 0) {
    return head;
  }
  let tail = head;
  let n = 1;
  while (tail.next !== null) {
    tail = tail.next;
    n++;
  }
  const newHeadIndex = n - (k % n);
  let newTail = head;
  for (let i = 0; i < newHeadIndex - 1; i++) {
    newTail = newTail.next;
  }
  tail.next = head;
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(1);

// Pointer to build the list
let current = head;

// Attach next nodes
current.next = new ListNode(2);
current = current.next;

current.next = new ListNode(3);
current = current.next;

current.next = new ListNode(4);
current = current.next;

current.next = new ListNode(5);

const k = 2;
const result = rotateRight(head, k);

console.log(result);
