//1491. Average Salary Excluding the Minimum and Maximum Salary

var average = function (salary) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
    min = Math.min(min, salary[i]);
    max = Math.max(max, salary[i]);
  }
  sum -= min + max;
  return sum / (salary.length - 2);
};

const salary = [4000, 3000, 1000, 2000];

const result = average(salary);

console.log(result);
