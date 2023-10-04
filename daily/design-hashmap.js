//706. Design HashMap

var MyHashMap = function () {
  this.map = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.map[key] !== undefined ? this.map[key] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};

var obj = new MyHashMap();
obj.put("val", 5);
var param_2 = obj.get("val");
console.log(param_2);
obj.remove("val");
console.log(obj.get("val"));
