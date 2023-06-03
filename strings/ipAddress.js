//1108. Defanging an IP Address

var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

const result = defangIPaddr("255.100.50.0");
console.log(result);
