//Is Linked list have cycle

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const temp1 = new Node(3);
const temp2 = new Node(2);
const temp3 = new Node(0);
const temp4 = new Node(4);

const head = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp2;

console.log(head);

console.log("-----------");

var hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  const set = new Set();
  let temp = head;
  while (temp != null) {
    if (set.has(temp)) {
      return true;
    }
    set.add(temp);
    temp = temp.next;
  }
  return false;
};

const result = hasCycle(head);

console.log(result);
