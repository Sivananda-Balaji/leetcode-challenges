//1344. Angle Between Hands of a Clock

var angleClock = function (hour, minutes) {
  const minuteAngle = minutes * 6;
  const hourAngle = hour * 30 + minutes * 0.5;
  const diff = Math.abs(hourAngle - minuteAngle);
  return Math.min(diff, 360 - diff);
};

const hour = 12,
  minutes = 30;

const result = angleClock(hour, minutes);

console.log(result);
