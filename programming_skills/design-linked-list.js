//707. Design Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let count = 0;
  let temp = this.head;
  if (count < index && temp !== null) {
    temp = temp.next;
    count++;
  }
  if (temp === null) {
    return -1;
  }
  return temp.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  if (this.head) {
    newNode.next = this.head;
  }
  this.head = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    return;
  }
  const temp = this.head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newnode = new Node(val);
  if (index === 0) {
    newnode.next = this.head;
    this.head = newnode;
    return;
  }
  let count = 0;
  let temp = this.head;
  while (temp && count < index - 1) {
    temp = temp.next;
    count++;
  }
  if (temp === null) {
    return;
  }
  newnode.next = temp.next;
  temp.next = newnode;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.head === null) {
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    return;
  }
  let count = 0;
  let temp = this.head;
  while (temp && count < index - 1) {
    temp = temp.next;
    count++;
  }
  if (temp === null || temp.next === null) {
    return;
  }
  temp.next = temp.next.next;
};

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
console.log(myLinkedList.get(1)); // return 2
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
console.log(myLinkedList.get(1)); // return 3
