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

//Variable Basics:

let myName="Ritesh Gupta"
console.log(myName)

const myAge=24;
console.log(myAge)

//Explore data types and type conversion:

let string="Ritesh";
let num=1999;
let bool= true
console.log(typeof(string))
console.log(typeof(bool))
console.log(typeof(num))

//Convert a string to a number and vice versa and return it from a function.

    let num1=500
    num.toString()
   console.log(num1) 
   const number = Number('22') 
   console.log(number)

//Array
//Work with arrays:
 //- Create an array of your favorite fruits and log them.
   //Arrays:
  //Work with arrays:
  /*In JavaScript, an array is a data structure used to store a collection of values, which can be of different data types such as numbers,
   strings, objects, or even other arrays.
   Arrays are one of the fundamental data structures in JavaScript and are often used to organize and manipulate data efficiently.
   */

 let array=["mango","apple","orange","banana","pomegranate"]
 console.log(array)

 //Write a program to find the largest number in an array and log it.
 let arr=[4,6,10,67,89,56,34,1]
 let maxNumber=Math.max(...arr);
 console.log(maxNumber)

 function findLargestNumber(arr) {
    let largest = arr[0]; // Assume the first element is the largest
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; // Update the largest if a larger number is found
      }
    }
  
    return largest;
  }
  console.log(findLargestNumber([10, 5, 8, 22, 3]))
  
   /*Objects:
Explore objects:
 - Create an object representing a person with properties like name, age, and country.
 
 - Write a function that takes a person object as an argument and logs their information.
*/ 

function infoPerson(person){
  return ` Name:${person.name}, Country: ${person.country}, Age: ${person.age}`
}
const person = {
  name: "John",
  country: "India",
  age: 30
};
console.log(infoPerson(person))