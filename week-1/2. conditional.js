/**
Introduce conditional statements:
 - Write a program that checks if a given number is even or odd.
 - Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
 - result should be logged in the terminal
 */

 /* Write a program that checks if a given number is even or odd */
 function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  const num = 42; 
  
  const result = isEvenOrOdd(num);
  console.log(`${num} is ${result}.`);

/* Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input */
function calculator(a, b, operation) {
  switch (operation) {
      case 'add':
          console.log(a + b);
          break;
      case 'subtract':
          console.log(a - b);
          break;
      case 'multiply':
          console.log(a * b);
          break;
      case 'divide':
          if (b === 0) {
              console.log("Cannot divide by zero.");
          } else {
              console.log(a / b);
          }
          break;
      default:
          console.log("Invalid operation.");
  }
}

calculator(45, 67, 'multiply');
