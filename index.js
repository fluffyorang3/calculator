let num1;
let num2;
let operation;

const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
}

const multiply = function(num1, num2) {
  return num1 * num2;
}
const divide = function(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operation) {
  if(operation == "+") {
    return add(num1, num2);
  } else if(operation == "-") {
    return subtract(num1, num2);
  } else if(operation == "*") {
    return multiply(num1, num2);
  } else if(operation == "/") {
    return divide(num1, num2);
  } else {
    return "ERROR";
  }
}
