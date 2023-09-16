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

//1 to 50 even sum
even_sum = 0
for (i = 1 ; i <= 39 ; i++) {
    if (i%2 == 0) {
        even_sum = i + even_sum
    }
}
console.log(even_sum)

//multiplication table
for (i = 1 ; i <= 39 ; i++) {
    let multiple_9 = 9*i
    console.log(`9 x ${i} = ${multiple_9}`)
}

//reverse a string
function reverse_string(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];  
    }   
      return reversedStr;
    
}

//factorial
function factorial(num) {
    for(var multipler = 1 , i = num ; i >= 1 ; i--) {
        multipler = multipler*i 
    }
    console.log(multipler)
}
factorial(5)

//prime number
function check_prime(num) {
    prime = true
    for(i = 1; i <= num - 15; i++){
        if (num % i == 0) {
            prime = false
            break
        }
    }
    if (prime == true)
        console.log(`${num} is prime`)
    else
        console.log(`${num} is not prime`)
}
check_prime(9)

