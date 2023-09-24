//1603. Design Parking System

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1) {
    if (this.big > 0) {
      this.big--;
      return true;
    } else {
      return false;
    }
  }
  if (carType === 2) {
    if (this.medium > 0) {
      this.medium--;
      return true;
    } else {
      return false;
    }
  }
  if (carType === 3) {
    if (this.small > 0) {
      this.small--;
      return true;
    } else {
      return false;
    }
  }
};

var obj = new ParkingSystem(1, 1, 0);
var param_1 = obj.addCar(1);
