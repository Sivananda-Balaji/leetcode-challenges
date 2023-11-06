//1845. Seat Reservation Manager

/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.seats = new Array(n).fill(false);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  const index = this.seats.findIndex((i) => i === false);
  this.seats[index] = true;
  return index + 1;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.seats[seatNumber] = false;
};

var obj = new SeatManager(5);
var param_1 = obj.reserve();
var param_2 = obj.reserve();
obj.unreserve(2);

console.log(obj.seats);
console.log(param_1);
console.log(param_2);
