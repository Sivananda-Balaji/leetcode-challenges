//380. Insert Delete GetRandom O(1)

var RandomizedSet = function () {
  this.numSet = new Set();
};

RandomizedSet.prototype.insert = function (val) {
  if (this.numSet.has(val)) {
    return false;
  }
  this.numSet.add(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (this.numSet.has(val)) {
    this.numSet.delete(val);
    return true;
  }
  return false;
};

RandomizedSet.prototype.getRandom = function () {
  const arraySet = Array.from(this.numSet);
  const randomIndex = Math.floor(Math.random() * arraySet.length);
  return arraySet[randomIndex];
};

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_11 = obj.insert(2);
var param_12 = obj.insert(10);
var param_13 = obj.insert(22);
var param_2 = obj.remove(2);
var param_3 = obj.getRandom();

console.log(obj, param_1, param_2, param_3);
