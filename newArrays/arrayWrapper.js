//2695. Array Wrapper

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
  valueOf() {
    return this.nums.reduce((a, b) => a + b, 0);
  }
  toString() {
    return `[${this.nums}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);
console.log(String(obj1));
console.log(String(obj2));
