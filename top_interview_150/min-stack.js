//155. Min Stack

var MinStack = function () {
  this.stackArr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stackArr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stackArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stackArr.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this.stackArr);
};

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();

console.log(param_3);
console.log(param_4);
