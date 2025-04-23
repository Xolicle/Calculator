let displayValue = "";
let value = "";
let currentValue = "";
let previousValue = "";
let operator = "";
let numBtns = document.querySelectorAll(".numbers");
let operatorBtns = document.querySelectorAll(".operators");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let backspace = document.querySelector(".backspace");
let display = document.querySelector(".display");

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    value = btn.innerHTML;
    // console.log(typeof value);
    appendNumber(value);
  });
});
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.innerHTML;
    operation(operator);
    console.log("operator " + operator);
    console.log(typeof operator);
  });
});
clear.addEventListener("click", () => {
  display.value = "";
  currentValue = "";
  previousValue = "";
  operator = "";
});

backspace.addEventListener("click", () => {
  displayValue = display.value;
  let elem = displayValue[displayValue.length - 1];
  displayValue = displayValue.replace(elem, "");
  currentValue = currentValue.replace(elem, "");
  display.value = displayValue;
});

equal.addEventListener("click", () => {
  let prev = Number(previousValue);
  let cur = Number(currentValue);
  let answer = operate(prev, operator, cur);
  console.log("answer " + answer);
  display.value = answer;
  currentValue = "";
  previousValue = "";
  operator = "";
});
function appendNumber(num) {
  currentValue += num;
  display.value = `${previousValue} ${operator} ${currentValue}`;
  // console.log("value " + currentValue);
  console.log("display value" + display.value);
  console.log("display length " + display.value.trim().length);
  console.log(typeof display.value);
}
function operation(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
  // currentValue += operator;
  display.value = `${previousValue} ${operator}`;
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(num, operator, anotherNum) {
  let result = "";
  if (operator === "+") {
    result = add(num, anotherNum);
  } else if (operator === "-") {
    result = subtract(num, anotherNum);
  } else if (operator === "÷") {
    result = divide(num, anotherNum);
  } else if (operator === "×") {
    result = multiply(num, anotherNum);
  } else {
    console.log("Error");
  }
  return result;
}
