/**
Introduce conditional statements:
 - Write a program that checks if a given number is even or odd.
 - Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
 - result should be logged in the terminal
 */



//Write a program that checks if a given number is even or odd.

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
const input = prompt("Enter a number:");
const number = parseInt(input);
const result = isEvenOrOdd(number);
console.log(`The number ${number} is ${result}.`);

// Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
//result should be logged in the terminal

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Division by zero is not allowed.";
    }
    return x / y;
}
const operation = prompt("Enter the operation (+, -, *, /):");
const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));

let result1;
switch (operation) {
    case "+":
        result1 = add(num1, num2);
        break;
    case "-":
        result1 = subtract(num1, num2);
        break;
    case "*":
        result1 = multiply(num1, num2);
        break;
    case "/":
        result1 = divide(num1, num2);
        break;
    default:
        result1 = "Invalid operation";
}
console.log(`Result: ${result1}`);