function fibonacci(num) {
  num = parseInt(num);
  //base case
  if (num < 0) {
    return "OOPS";
  } else if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// Do not edit below this line
module.exports = fibonacci;
