//2727. Is Object Empty

var isEmpty = function (obj) {
  for (let val in obj) {
    return false;
  }
  return true;
};

const obj = { x: 5, y: 42 };

const result = isEmpty(obj);

console.log(result);

/**
 * var isEmpty = function (obj) {
  return JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]";
};
 */
