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



// Write a program that uses a loop to count down from 10 to 1, log each number in the console. Once it reaches 1, print "Blast Off!"
function print_number(num) {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
        if (i == 1) {
            console.log("Blast Off!")
        }
    }
}
var num = 10;
print_number(num)

// Even Number Sum:
// Create a program that calculates and logs the sum of all even numbers from 1 to 50 using a loop.

function SumEvenNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
var num = 7;
let result = SumEvenNumber(num)
console.log(result)

// Multiplication Table:
// Generate a multiplication table for a given number (e.g., 7). Use a loop to display the table from 1 to 10. Just log the result in the table in the console.

function SumEvenNumber(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i}=`, num * i)
    }

}
var num = 7;
SumEvenNumber(num)

//  Reverse a String:
// Write a function that takes a string as input and uses a loop to reverse it. For example, if given "hello," the function should return "olleh." and log it

function reverseString(name) {
    function swap(arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    let charArray = name.split('');
    for (let i = 0, j = charArray.length - 1; i < charArray.length / 2; i++, j--) {
        swap(charArray, i, j);
    }

    return charArray.join('');
}
var name = "hello";
let result1 = reverseString(name);
console.log(result1);

// Factorial Calculator:
// Implement a program that calculates and displays the factorial of a given number (e.g., 5). Use a loop to perform the calculation.

function fact(num2) {
    if (num2 <= 1) {
        return 1;
    } else {
        return num2 * fact(num2 - 1);
    }
}
let num2 = 5;
let jadu = fact(num2)
console.log(jadu)

// Prime Number Checker:
// Create a function that checks whether a given number is prime or not. Use a loop to test divisibility by numbers from 2 to the square root of the given number.

function isPrime(num1) {
    if (num1 <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            return false;
        }
    }
    return true;
}
let num1 = 5;
let jadu1 = isPrime(num1);

if (jadu1) {
    console.log(num + " is prime");
} else {
    console.log(num + " is not prime");
}