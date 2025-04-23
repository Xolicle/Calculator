let displayValue = "";
let value = "";
let currentValue = "";
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
    console.log("operator " + operator);
  });
});
clear.addEventListener("click", () => {
  display.value = "";
  currentValue = "";
});

function appendNumber(num) {
  currentValue += num;
  display.value = `${currentValue}`;
  console.log("inside appendNumber " + currentValue);
}
function operation(op) {}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(num, operator, anotherNum) {
  if (operator === "+") {
    add(num, anotherNum);
  } else if (operator === "-") {
    subtract(num, anotherNum);
  } else if (operator === "/") {
    divide(num, anotherNum);
  } else if (operator === "*") {
    multiply(num, anotherNum);
  } else {
    console.log("Error");
  }
}
