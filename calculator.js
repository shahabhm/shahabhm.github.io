let currentNumber = "";
let previousNumber = "";
let operator = "";
let showString = "";

function appendNumber(number) {
  currentNumber += number;
  showString += currentNumber
  document.getElementById("display").value = showString;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  showString = "";
  document.getElementById("display").value = "";
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
    showString += op;
  }
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

    previousNumber = "";
    operator = "";
    showString = result.toString();
    document.getElementById("display").value = showString;
  }
}
