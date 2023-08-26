//2794. Create Object from Two Arrays

var createObject = function (keysArr, valuesArr) {
  const answer = {};
  for (let i = 0; i < keysArr.length; i++) {
    let key = keysArr[i];
    if (typeof keysArr[i] !== "string") {
      key = String(key);
    }
    if (!(key in answer)) {
      answer[key] = valuesArr[i];
    }
  }
  return answer;
};

const keysArr = [91, 47, "", 23, "", 24, 0],
  valuesArr = [
    0,
    [46, false, "l", 72, 4, "v", true],
    false,
    21,
    true,
    [26, false, 33, 52, 0, 98, "y"],
    "p",
  ];

const result = createObject(keysArr, valuesArr);
console.log(result);
