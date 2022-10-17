// Business logic

// Addition
function add(number1, number2) {
  return number1 + number2;
}

// Subtraction
function subtract(number1, number2) {
  return number1 - number2;
}

// Multiplication
function multiply(number1, number2) {
  return number1 * number2;
}


// User Interface logic
const number1 = parseInt(prompt("Enter a number"));
const number2 = parseInt(prompt("Enter another number"));

window.alert(multiply(number1,number2))
window.alert(subtract(number1,number2))
window.alert(add(number1,number2))