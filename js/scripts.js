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

//Division
function divide(number1, number2) {
  return number1 / number2;
}


// User Interface logic
const number1 = parseInt(prompt("Enter a number"));
const number2 = parseInt(prompt("Enter another number"));

window.alert("The division of your numbers equals to " + divide(number1, number2))
window.alert("The multiplication of your numbers equals to " + multiply(number1,number2))
window.alert("The substraction of your numbers equals to " + subtract(number1,number2))
window.alert("The addition of your numbers equals to " + add(number1,number2))