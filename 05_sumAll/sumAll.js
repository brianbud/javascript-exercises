const sumAll = function (num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let sum = 0;

  if (min < 0) {
    return "ERROR";
  } else if (min >= 0) {
    for (let i = min; i <= max; i++) {
      sum += i;
    }

    return sum;
  }
};
// Do not edit below this line
module.exports = sumAll;
