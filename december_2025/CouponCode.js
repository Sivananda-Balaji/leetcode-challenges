//3606. Coupon Code Validator

var validateCoupons = function (code, businessLine, isActive) {
  const validCode = [];
  const validBusiness = ["electronics", "grocery", "pharmacy", "restaurant"];
  const priority = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3,
  };
  for (let i = 0; i < code.length; i++) {
    if (/^[A-Za-z0-9_]+$/.test(code[i])) {
      if (isActive[i] === true && validBusiness.includes(businessLine[i])) {
        const obj = {
          code: code[i],
          businessLine: businessLine[i],
        };
        validCode.push(obj);
      }
    }
  }
  const ans = validCode.sort((a, b) => {
    const diff = priority[a.businessLine] - priority[b.businessLine];
    if (diff !== 0) {
      return diff;
    }
    return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
  });
  return ans.map((i) => i.code);
};

const code = ["SAVE20", "", "PHARMA5", "SAVE@20"],
  businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"],
  isActive = [true, true, true, true];

const result = validateCoupons(code, businessLine, isActive);

console.log(result);
