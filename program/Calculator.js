// Function to add two numbers
function add(x, y) {
    return x + y;
  }
  
  // Function to subtract two numbers
  function subtract(x, y) {
    return x - y;
  }
  
  // Function to multiply two numbers
  function multiply(x, y) {
    return x * y;
  }
  
  // Function to divide two numbers
  function divide(x, y) {
    if (y === 0) {
      return "Cannot divide by zero!";
    }
    return x / y;
  }
  
  // Function to perform the operation based on user input
  function calculate() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Enter an operation (+, -, *, /):");
    
    let result;
    switch (operation) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        window.alert("Invalid operation!");
        return;
    }
  
    window.alert("Result:"+result);
  }
  
  // Call the calculate function to start the calculator
  calculate();
  