/**
Introduce conditional statements:
 - Write a program that checks if a given number is even or odd.
 - Create a basic calculator that can add, subtract, multiply, or divide two numbers based on user input.
 */


//  ------------------------Check odd / even
const numberArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1); // this will generate random number array
console.log("Number Array: ", numberArray);
const checkParity = (arr) => {
    let res = [];
    arr.map(num => {
        res.push(num % 2 === 0 ? { [num]: "Even" } : { [num]: "Odd" });
    })
    return res;
}
console.log("Result: ", checkParity(numberArray));