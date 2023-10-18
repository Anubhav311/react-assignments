/**
Introduce conditional statements:
 - Write a program that checks if a given number is even or odd.
 - Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
 - result should be logged in the terminal
 */

 function evenOdd(no){
    if(no% 2==0){
        console.log("Even")

    }else{
        console.log("odd")
    }
    return no

 }
 console.log(evenOdd(7))

//  - Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
//  - result should be logged in the terminal

// Function to perform addition
function add(n1,n2){
    return n1+n2
}
// Function to perform subtraction
function sub(n1,n2){
    return n1-n2
}
// Function to perform multiply
function multiply(n1,n2){
    return n1*n2
}
// Function to perform division
function division(n1,n2){
    if(n2===0){
        return "invalid n2 not divide by zero"
    }
    return n1/n2
}
// Function to perform addition

function calculate() {
    const n1 = parseFloat(prompt("Enter the first number:"));
    const n2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter the operation (+, -, *, /):");
  
    let result;
  
    switch (operation) {
      case "+":
        result = add(n1, n2);
        break;
      case "-":
        result = subtract(n1,n2);
        break;
      case "*":
        result = multiply(n1,n2);
        break;
      case "/":
        result = divide(n1,n2);
        break;
      default:
        result = "Invalid operation";
    }
  
    console.log(`Result: ${result}`);
  }
  
  // Call the calculate function to start the calculator
  calculate();