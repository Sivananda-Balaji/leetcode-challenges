//2775. Undefined to Null

var undefinedToNull = function (obj) {
  for (let val in obj) {
    if (Array.isArray(obj[val]) || typeof obj[val] === "object") {
      obj[val] = undefinedToNull(obj[val]);
    } else {
      if (obj[val] === undefined) {
        obj[val] = null;
      }
    }
  }
  return obj;
};

console.log(undefinedToNull({ a: 1, b: 3, c: { a: undefined } }));
console.log(undefinedToNull({ a: undefined, b: ["a", undefined] }));
