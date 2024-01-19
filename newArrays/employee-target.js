//2798. Number of Employees Who Met the Target

var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let answer = 0;
  for (let val of hours) {
    if (val >= target) {
      answer++;
    }
  }
  return answer;
};

const hours = [0, 1, 2, 3, 4],
  target = 2;

const result = numberOfEmployeesWhoMetTarget(hours, target);

console.log(result);
