let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
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

    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    document.getElementById("display").value = currentNumber;
  }
}
