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

//solution-1
for (let i = 10; i >= 1; i--) {
    console.log(i);
    if (i == 1) {
      console.log("Blast Off!");
    }
  }
  //solution-2
  function sumEven(n) {
    let sum = 0;
    for (let i = 1; i >= n; i++) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(50);
  
  //solution-3
  let number = 7;
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
  
  //solution4
  let newString = "";
  function reverseStr(str) {
    for (let i = str.length - 1; i > 0; i--) {
      newString += str[i];
    }
    return newString;
  }
  console.log(reverseStr("hello"));
  
  //solution5
  
  let num = 5;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(`The Factorial of ${number} is:${factorial} `);
  
  //solution6
  function isPrime(n){
      if(n<2){
          return "FALSE"
  
      }
      for(let i=2;i<n;i++){
          if(n%i===0)
          return "number is not prime"
      }
      return "number is prime number"
  }
  console.log(isPrime(10))
  