// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const container = document.querySelector(".calculator-container"),
  calculator = container.querySelector(".js-calculator"),
  input = calculator.querySelector("input");

let number = calculator.getElementsByClassName("num"),
  char = calculator.getElementsByClassName("char");

var result = calculator.querySelector(".result"),
  clear = calculator.querySelector(".clear");

var firstNum = "";
var secondNum = "";
var clickedChar = "";

function calculatate() {
  secondNum = input.value;
  if (clickedChar === "+") {
    input.value = parseInt(firstNum) + parseInt(secondNum);
  } else if (clickedChar === "-") {
    input.value = parseInt(firstNum) - parseInt(secondNum);
  } else if (clickedChar === "*") {
    input.value = parseInt(firstNum) * parseInt(secondNum);
  } else if (clickedChar === "/") {
    input.value = parseInt(firstNum) / parseInt(secondNum);
  }
}
function clearAll() {
  input.value = "";
  firstNum = "";
  secondNum = "";
  clickedChar = "";
}
function clickChar() {
  firstNum = input.value;
  clickedChar = this.innerText;
}

function clickNum() {
  input.value = "";
  const num = this.innerText;
  input.value += num;
}

function calculatorInit() {
  for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", clickNum);
  }

  for (var j = 0; j < char.length; j++) {
    char[j].addEventListener("click", clickChar);
  }

  result.addEventListener("click", calculatate);
  clear.addEventListener("click", clearAll);
}

function init() {
  calculatorInit();
}

init();
