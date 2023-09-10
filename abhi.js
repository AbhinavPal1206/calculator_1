let currentInput = "0";

function appendToDisplay(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  document.getElementById("result").value = currentInput;
}

function deleteFromDisplay() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  document.getElementById("result").value = currentInput;
}

function reset() {
  currentInput = "0";
  document.getElementById("result").value = currentInput;
}


function calculate() {
  try {
    let calculatedResult = eval(currentInput);
    if (!isNaN(calculatedResult)) {
      let formattedResult = formatResult(calculatedResult);
      document.getElementById("result").value = formattedResult;
      currentInput = formattedResult;
    } else {
      currentInput = "Error";
      document.getElementById("result").value = currentInput;
    }
  } catch (error) {
    currentInput = "Error";
    document.getElementById("result").value = currentInput;
  }
}


function formatResult(result) {
  let resultString = result.toString();
  let parts = resultString.split('.');
  let integerPart = parts[0];
  let decimalPart = parts[1] || "";

  if (integerPart.length > 6) {
    integerPart = integerPart.slice(0, 6);
  }

  return integerPart + (decimalPart ? "." + decimalPart : "");
}

