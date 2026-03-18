export function generateResultText(calculationResult) {
  let resultText = "";

  if (calculationResult === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (calculationResult !== "no-calc") {
    resultText = "Result: " + calculationResult;
  }
  return resultText;
}

export function outputResult(data) {
  const output = document.getElementById("result");
  output.textContent = data;
}
