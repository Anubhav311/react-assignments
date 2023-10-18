/*
Variable Basics:
Create variables to store and log information:
 - Declare a variable for your name and console log it.
 - Declare a variable for your age and console log it.

Explore data types and type conversion:
 - Create variables of different data types (string, number, boolean).
 - Use typeof to check the data type of variables and console.log it.
 - Convert a string to a number and vice versa and return it from a function.

 Arrays:
Work with arrays:
 - Create an array of your favorite fruits and log them.
 - Write a program to find the largest number in an array and log it.

 Objects:
Explore objects:
 - Create an object representing a person with properties like name, age, and country.
 - Write a function that takes a person object as an argument and logs their information.
*/


/* (1)  Variable*/
/* - Declare a variable for your name and console log it. */

var MyName = "Vicky Verma";
console.log("My Name is" , MyName);

/* - Declare a variable for your age and console log it.*/

var age = 22;
console.log("I am" , age , "Years Old");

/* (1)  DataType */
/* Use typeof to check the data type of variables and console.log it */

/* string */
var [string] = ["Hello"];
console.log(string);
console.log(typeof string);

/* Number */
var [Number] = [3];
console.log(Number);
console.log(typeof Number);

/* boolean */
var [boolean] = [true];
console.log(boolean);
console.log(typeof boolean);

/* Convert a string to a number and vice versa and return it from a function.*/




/* Array */
/* Create an array of your favorite fruits and log them*/
const favoriteFruits = ["apple", "banana", "strawberry", "mango", "watermelon"];
console.log("My favorite fruits are:");
favoriteFruits.forEach(fruit => {
  console.log(fruit);
});

/*  - Write a program to find the largest number in an array and log it. */

const numbers = [10, 5, 20, 8, 15];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log(`The largest number is: ${largestNumber}`);

/*  - Create an object representing a person with properties like name, age, and country. */

const obj = {
    name: "John Doe",
    age: 30,
    country: "uttar pradesh"
  };
  
  console.log(obj.name); 
  console.log(obj.age);
  console.log(obj.country);

  /* Write a function that takes a person object as an argument and logs their information */

  function logPersonInfo(ob) {
    console.log(`Name: ${ob.name}`);
    console.log(`Age: ${ob.age}`);
    console.log(`Country: ${ob.country}`);
  }
  
  const ob = {
    name: "John Doe",
    age: 30,
    country: "uttar pradesh"
  };
  
  logPersonInfo(ob);