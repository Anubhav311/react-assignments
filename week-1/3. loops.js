/**
 Countdown Loop:
Write a program that uses a loop to count down from 10 to 1, log each number in the console. Once it reaches 1, print "Blast Off!"

Even Number Sum:
Create a program that calculates and logs the sum of all even numbers from 1 to 50 using a loop.

Multiplication Table:
Generate a multiplication table for a given number (e.g., 7). Use a loop to display the table from 1 to 10. Just log the result in the table in the console.

Reverse a String:
Write a function that takes a string as input and uses a loop to reverse it. For example, if given "hello," the function should return "olleh." and log it

Factorial Calculator:
Implement a program that calculates and displays the factorial of a given number (e.g., 5). Use a loop to perform the calculation.

Prime Number Checker:
Create a function that checks whether a given number is prime or not. Use a loop to test divisibility by numbers from 2 to the square root of the given number.
 */



/* Write a program that uses a loop to count down from 10 to 1, log each number in the console. Once it reaches 1, print "Blast Off */

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Blast Off!");


/* Create a program that calculates and logs the sum of all even numbers from 1 to 50 using a loop */
let sum = 0;

for (let i = 2; i <= 50; i += 2) {
    sum += i;
}

console.log("The sum of even numbers from 1 to 50 is:", sum);


/* Generate a multiplication table for a given number (e.g., 7). Use a loop to display the table from 1 to 10. Just log the result in the table in the console.*/
const number = 7;

console.log("Multiplication Table for " + number + ":");

for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(number + " * " + i + " = " + result);
}

/* Write a function that takes a string as input and uses a loop to reverse it. For example, if given "hello," the function should return "olleh." and log it */

function reverseString(inputString) {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
    }
    return reversed;
}

const input = "hello";
const reversedString = reverseString(input);

console.log(reversedString);


/* Implement a program that calculates and displays the factorial of a given number (e.g., 5). Use a loop to perform the calculation.*/

function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

const inputNumber = 5;
const result = calculateFactorial(inputNumber);

console.log("The factorial of " + inputNumber + " is: " + result);


/* Create a function that checks whether a given number is prime or not. Use a loop to test divisibility by numbers from 2 to the square root of the given number. */

function checkPrime(num) {
    if (num <= 1) return console.log(num + " is not prime");
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return console.log(num + " is not prime");
    }
    return console.log(num + " is prime");
}

checkPrime(7); // Example usage

