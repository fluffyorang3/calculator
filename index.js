let selectedNum;
let newElement;
let num1;
let num2;
let operation;
let displayValue;
let currentlyTyping = "2";

//OPERATION FUNCTIONS

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


//OPERATION SELECTOR

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

//CLEAR FUNCTION

function clear() {

}


const buttonMapping = {
  '_1': 1,
  '_2': 2,
  '_3': 3,
  '_4': 4,
  '_5': 5,
  '_6': 6,
  '_7': 7,
  '_8': 8,
  '_9': 9,
  '_0': 0,
  '_clear': clear(),
  '_divide': "/",
  '_multiply': "*",
  '_subtract': "-",
  '_add': "+",
  '_equals': operate(),
}

buttonKeys = Object.keys(buttonMapping);
buttonValues = Object.values(buttonMapping);

console.log(buttonKeys);
console.log(buttonValues);

const secondaryDisplay = document.querySelector(".calculator-body-screen-secondary")
const primaryDisplay = document.querySelector(".calculator-body-screen-primary")

_1.addEventListener("click", () => {
  secondaryDisplay.textContent += 1;
  
})

_2.addEventListener("click", () => {
  secondaryDisplay.textContent += 2;
})

_3.addEventListener("click", () => {
  secondaryDisplay.textContent += 3;
})

_4.addEventListener("click", () => {
  secondaryDisplay.textContent += 4;
})

_5.addEventListener("click", () => {
  secondaryDisplay.textContent += 5;
})

_6.addEventListener("click", () => {
  secondaryDisplay.textContent += 6;
})

_7.addEventListener("click", () => {
  secondaryDisplay.textContent += 7;
})

_8.addEventListener("click", () => {
  secondaryDisplay.textContent += 8;
})

_9.addEventListener("click", () => {
  secondaryDisplay.textContent += 9;
})

_0.addEventListener("click", () => {
  secondaryDisplay.textContent += 0;
})

_divide.addEventListener("click", () => {
  num1 = secondaryDisplay.textContent
  secondaryDisplay.textContent += "/";
  operation = "/"
})

_multiply.addEventListener("click", () => {
  num1 = secondaryDisplay.textContent
  secondaryDisplay.textContent += "x";
  operation = "*"
})

_subtract.addEventListener("click", () => {
  num1 = secondaryDisplay.textContent
  secondaryDisplay.textContent += "-";
  operation = "-"
})

_add.addEventListener("click", () => {
  num1 = secondaryDisplay.textContent
  secondaryDisplay.textContent += "+";
  operation = "+"
})

_clear.addEventListener("click", () => {
  num1 = secondaryDisplay.textContent
  secondaryDisplay.textContent = "";
  primaryDisplay.textContent = "";
  operation = "";
})

_equals.addEventListener("click", () => {
  console.log(num1);
  console.log(num1.length);
  let firstPart = secondaryDisplay.textContent;
  num2 = firstPart.slice(num1.length + 1)
  console.log(num2);
  result = operate(num1, num2, operation);
  console.log(result);
  primaryDisplay.textContent = result;
}
)











