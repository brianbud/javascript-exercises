const convertToCelsius = function (fah) {
  let result = (((fah - 32) * 5) / 9).toFixed(1);
  return Number(result);
};

const convertToFahrenheit = function (cel) {
  let result = ((cel * 9) / 5 + 32).toFixed(1);
  return Number(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
