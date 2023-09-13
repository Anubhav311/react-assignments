/**
Introduce conditional statements:
 - Write a program that checks if a given number is even or odd.
 - Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
 - result should be logged in the terminal
 */

function get_even_odd(num) {
    if (num%2==0) {
        console.log(`${num} is even`)
    }
    else {
        console.log(`${num} is odd`)
    }
}
get_even_odd(4)
get_even_odd(7)

function calculator(a,b,opertion) {
    if (opertion == 'add'){
        console.log(a+b)
    }
    if (opertion == 'subtract'){
        console.log(a-b)
    }
    if (opertion == 'multiply'){
        console.log(a*b)
    }
    if (opertion == 'divide'){
        console.log(a/b)
    }

}
calculator(45,67,'multiply')
