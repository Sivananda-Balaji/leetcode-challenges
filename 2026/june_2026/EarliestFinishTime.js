//3633. Earliest Finish Time for Land and Water Rides I

var earliestFinishTime = function (
  landStartTime,
  landDuration,
  waterStartTime,
  waterDuration,
) {
  let ans = Infinity;
  for (let i = 0; i < landStartTime.length; i++) {
    for (let j = 0; j < waterStartTime.length; j++) {
      let startLand = landStartTime[i];
      let finishLand = startLand + landDuration[i];
      let startWater = Math.max(finishLand, waterStartTime[j]);
      let finishWater = startWater + waterDuration[j];
      ans = Math.min(ans, finishWater);
      startWater = waterStartTime[j];
      finishWater = startWater + waterDuration[j];
      startLand = Math.max(finishWater, landStartTime[i]);
      finishLand = startLand + landDuration[i];
      ans = Math.min(ans, finishLand);
    }
  }
  return ans;
};

const landStartTime = [2, 8],
  landDuration = [4, 1],
  waterStartTime = [6],
  waterDuration = [3];

const result = earliestFinishTime(
  landStartTime,
  landDuration,
  waterStartTime,
  waterDuration,
);

console.log(result);
