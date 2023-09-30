//21. Merge Two Sorted Lists

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list1 = new ListNode(1);
const temp11 = new ListNode(2);
const temp12 = new ListNode(4);

list1.next = temp11;
temp11.next = temp12;

const list2 = new ListNode(1);
const temp21 = new ListNode(3);
const temp22 = new ListNode(4);

list2.next = temp21;
temp21.next = temp22;

var mergeTwoLists = function (list1, list2) {
  let curr = new ListNode(-1);
  const temp = curr;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
      curr = curr.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
      curr = curr.next;
    }
  }
  while (list1 !== null) {
    curr.next = list1;
    list1 = list1.next;
    curr = curr.next;
  }
  while (list2 !== null) {
    curr.next = list2;
    list2 = list2.next;
    curr = curr.next;
  }
  return temp.next;
};

const result = mergeTwoLists(list1, list2);

console.log(result);

/**
 * var mergeTwoLists = function (list1, list2) {
  let curr = new ListNode(-1);
  const temp = curr;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = new ListNode(list1.val);
      curr = curr.next;
      list1 = list1.next;
    } else {
      curr.next = new ListNode(list2.val);
      curr = curr.next;
      list2 = list2.next;
    }
  }
  while (list1 !== null) {
    curr.next = new ListNode(list1.val);
    curr = curr.next;
    list1 = list1.next;
  }
  while (list2 !== null) {
    curr.next = new ListNode(list2.val);
    curr = curr.next;
    list2 = list2.next;
  }
  return temp.next;
};
 */
