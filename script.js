let display = document.getElementById('display');

function appendNumber(num) {
  if (display.textContent === '0') {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function appendOperator(op) {
  display.textContent += op;
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    // Replace `÷` and `×` if typed directly
    let expression = display.textContent.replace(/÷/g, '/').replace(/×/g, '*');
    display.textContent = eval(expression);
  } catch {
    display.textContent = 'Error';
  }
}

function consoleLog() {
  console.log(display.textContent);
}
