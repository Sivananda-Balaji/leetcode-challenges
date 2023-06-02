//2244. Minimum Rounds to Complete All Tasks

var minimumRounds = function (tasks) {
  const count = {};
  let rounds = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (!count[tasks[i]]) {
      count[tasks[i]] = 1;
    } else {
      count[tasks[i]]++;
    }
  }
  for (let task in count) {
    if (count[task] === 1) {
      return -1;
    }
    if (count[task] % 3 === 0) {
      rounds += count[task] / 3;
    } else {
      rounds += Math.ceil(count[task] / 3);
    }
  }
  return rounds;
};

const result = minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]);

console.log(result);
