//622. Design Circular Queue

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k);
  this.front = -1;
  this.rear = -1;
  this.cap = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  } else if (this.isEmpty()) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.rear = (this.rear + 1) % this.cap;
  }
  this.queue[this.rear] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  } else if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
    return true;
  } else {
    this.front = (this.front + 1) % this.cap;
    return true;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.front === -1 && this.rear === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.rear + 1) % this.cap === this.front;
};

var obj = new MyCircularQueue(5);
var param_1 = obj.enQueue(20);
var param_2 = obj.deQueue();
var param_3 = obj.Front();
var param_4 = obj.Rear();
var param_5 = obj.isEmpty();
var param_6 = obj.isFull();

console.log(param_1, param_2, param_3, param_4, param_5, param_6);
