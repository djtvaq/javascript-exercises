const ftoc = function(f) {
let farToCelPrecice = ((f-32)*(5/9))
let celString = farToCelPrecice.toFixed(1)
return parseFloat(celString)
};

const ctof = function(c) {
let celToFarPrecice = (c*(9/5)+32)
let farString = celToFarPrecice.toFixed(1)
return parseFloat(farString)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
