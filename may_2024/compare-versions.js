//165. Compare Version Numbers

var compareVersion = function (version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const len1 = arr1.length;
  const len2 = arr2.length;
  for (let i = 0; i < len1 || i < len2; i++) {
    if (!arr1[i]) {
      arr1[i] = 0;
    } else if (!arr2[i]) {
      arr2[i] = 0;
    }
    if (Number(arr1[i]) > Number(arr2[i])) {
      return 1;
    } else if (Number(arr2[i]) > Number(arr1[i])) {
      return -1;
    }
  }
  return 0;
};

const version1 = "1.0.1",
  version2 = "1";

const result = compareVersion(version1, version2);

console.log(result);
