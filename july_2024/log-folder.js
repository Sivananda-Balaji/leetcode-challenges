//1598. Crawler Log Folder

var minOperations = function (logs) {
  let count = 0;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "../") {
      count <= 0 ? (count = 0) : count--;
    } else if (logs[i] !== "./") {
      count++;
    }
  }
  return count < 0 ? 0 : count;
};

const logs = ["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"];

const result = minOperations(logs);

console.log(result);
