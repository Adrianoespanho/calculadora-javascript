let displayValue = '';
function addToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('resultado').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  let result;
  try {
    result = Function('"use strict"; return (' + displayValue + ')')();
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = '';
    updateDisplay();
    alert('Erro na expressão!');
  }
}

 
  