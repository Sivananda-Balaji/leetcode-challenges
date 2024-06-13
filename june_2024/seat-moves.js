//2037. Minimum Number of Moves to Seat Everyone

var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < seats.length; i++) {
    answer += Math.abs(seats[i] - students[i]);
  }
  return answer;
};

const seats = [3, 1, 5],
  students = [2, 7, 4];

const result = minMovesToSeat(seats, students);

console.log(result);
