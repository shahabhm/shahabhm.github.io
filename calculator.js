let currentNumber = "";
let previousNumber = "";
let operator = "";
let showMessage = "";

function appendNumber(number) {
  currentNumber += number;
  showMessage += currentNumber;
  document.getElementById("display").value = showMessage;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  showMessage = "";
  document.getElementById("display").value = "";
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
    showMessage += op;
  }
  document.getElementById("display").value = showMessage;
}

function calculate() {
  if (currentNumber !== "" && previousNumber !== "" && operator !== "") {
    let result;
    const prevNum = parseFloat(previousNumber);
    const currNum = parseFloat(currentNumber);

    switch (operator) {
      case "+":
        result = prevNum + currNum;
        break;
      case "-":
        result = prevNum - currNum;
        break;
      case "*":
        result = prevNum * currNum;
        break;
      case "/":
        if (currNum === 0) {
          alert("Division by zero!");
          return;
        }
        result = prevNum / currNum;
        break;
      default:
        break;
    }

    showMessage = result.toString();
    previousNumber = "";
    operator = "";
    currentNumber = "";
    document.getElementById("display").value = showMessage;
  }
}
