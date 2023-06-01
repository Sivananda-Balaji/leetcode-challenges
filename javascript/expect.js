//2704. To Be Or Not To Be

var expect = function (val) {
  return {
    toBe: (val1) => {
      if (val === val1) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val1) => {
      if (val !== val1) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

const res = expect(5).toBe(5); // true
console.log(res);
const res1 = expect(5).notToBe(5); // throws "Equal"
console.log(res1);
