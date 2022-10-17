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

// Results 
const divAlert = ("The division of your numbers equals to " + divide(number1, number2) + ". ");
const multAlert = ("The multiplication of your numbers equals to " + multiply(number1, number2) + ". ");
const subAlert = ("The substraction of your numbers equals to " + subtract(number1, number2) + ". ");
const addAlert = ("The addition of your numbers equals to " + add(number1, number2) + ". ");

// Numerized results
const divAlertEnumerated = number1 + " / " + number2 + " = " + divide(number1, number2) + ", ";
const multAlertEnumerated = number1 + " * " + number2 + " = " + multiply(number1, number2) + ", ";
const subAlertEnumerated = number1 + " - " + number2 + " = " + subtract(number1, number2) + ", ";
const addAlertEnumerated = number1 + " + " + number2 + " = " + add(number1, number2) + "."

// Results alert summary
window.alert(divAlert + multAlert + subAlert + addAlert);

// Enumerated results summary
window.alert(divAlertEnumerated + multAlertEnumerated + subAlertEnumerated + addAlertEnumerated);


// window.alert("The division of your numbers equals to " + divide(number1, number2))
// window.alert("The multiplication of your numbers equals to " + multiply(number1,number2))
// window.alert("The substraction of your numbers equals to " + subtract(number1,number2))
// window.alert("The addition of your numbers equals to " + add(number1,number2))