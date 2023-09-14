// Write a program that uses a loop to count down from 10 to 1, log each number in the console. Once it reaches 1, print "Blast Off!"

for (let i = 10; i >= 1; i--) {
  if (i == 1) {
    console.log("Blast Off!");
    break;
  }
  console.log(i);
}

// Create a program that calculates and logs the sum of all even numbers from 1 to 50 using a loop.
let sum = 0;

for (let i = 2; i <= 50; i += 2) {
  sum += i;
}

console.log("Sum of even numbers from 1 to 50:", sum);

// Generate a multiplication table for a given number (e.g., 7). Use a loop to display the table from 1 to 10. Just log the result in the table in the console.

let output = 0;
let num = 2; //Input a number
for (let i = 1; i <= 10; i++) {
  output = num * i;
  console.log(output);
}
// Write a function that takes a string as input and uses a loop to reverse it. For example, if given "hello," the function should return "olleh." and log it

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const result = reverseString("BHARAT");
console.log(result);

// Implement a program that calculates and displays the factorial of a given number (e.g., 5). Use a loop to perform the calculation.
let fact = 1;
let factNum = 5;

for (i = 1; i <= factNum; i++) {
  fact = fact * i;
}
console.log("Factorial is " + fact);

// Prime Number Checker:
// Create a function that checks whether a given number is prime or not. Use a loop to test divisibility by numbers from 2 to the square root of the given number.

let count = 0;
let Number = 25;
for (i = 2; i <= Number / 2; i++) {
  if (Number % i == 0) {
    count++;
    break;
  }
}
if (count == 0 && Number != 1) {
  console.log(" is a Prime Number", Number);
} else {
  console.log(" is Not", Number);
}
