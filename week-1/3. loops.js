/*
 Countdown Loop:
Write a program that uses a loop to count down from 10 to 1, displaying each number in the console. Once it reaches 1, print "Blast Off!"

Even Number Sum:
Create a program that calculates and displays the sum of all even numbers from 1 to 50 using a loop.

Multiplication Table:
Generate a multiplication table for a given number (e.g., 7). Use a loop to display the table from 1 to 10.

Reverse a String:
Write a function that takes a string as input and uses a loop to reverse it. For example, if given "hello," the function should return "olleh."

Factorial Calculator:
Implement a program that calculates and displays the factorial of a given number (e.g., 5). Use a loop to perform the calculation.

Prime Number Checker:
Create a function that checks whether a given number is prime or not. Use a loop to test divisibility by numbers from 2 to the square root of the given number.
*/

// ---------------------------------------- counter - using loop
for (let i = 10; i > 0; i--) {
    i === 1
        ? console.log("Blast Off!")
        : console.log(i);
}

// --------------------------------------- Even sum
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += (i % 2 === 0
        ? i
        : 0);
}
console.log("Even Sum [1, 50]: ", sum);

// -------------------------------------  Reverse a string
let originalStr = "Cobra kai";
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let reversedStr = reverseString(originalStr);
console.log(`Reverse ${originalStr}: `, reversedStr);


// ------------------------- factorial of number
const num = 7;
let res = 1;
for (let i = 1; i <= num; i++) {
    res = res * i;
}
console.log(`Factorial of ${num}: `, res);


// ----------------------------- Prime or Not
const arr = [2, 5, 8, 10, 27];
let finalRes = [];
arr.forEach(num => {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else if (num <= 3) {
        isPrime = true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        isPrime = false;
    } else {
        for (let i = 5; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    finalRes.push({ number: num, status: isPrime ? "Prime" : "Not Prime" });
});

console.log("Prime or Not? ", finalRes);


