/*
Variable Basics:
Create variables to store and log information:
 - Declare a variable for your name and console log it.
 - Declare a variable for your age and console log it.

Explore data types and type conversion:
 - Create variables of different data types (string, number, boolean).
 - Use typeof to check the data type of variables.
 - Convert a string to a number and vice versa.

 Arrays:
Work with arrays:
 - Create an array of your favorite fruits and display them.
 - Write a program to find the largest number in an array.

 Objects:
Explore objects:
 - Create an object representing a person with properties like name, age, and country.
 - Write a function that takes a person object as an argument and displays their information.
*/


// ------------------------------------ 1st Question
let myName = "Harsh Rishiwal";
let myAge = 23;
console.log(`Name: ${myName}` + " | " + `Age: ${myAge}`);

// ------------------------------------- 2nd Q
let str = "This is a string";
let num = 23;
let bol = false;

console.log("Type Check: ", typeof str);
console.log("Type Check: ", typeof num);
console.log("Type Check: ", typeof bol);

let OurString = "23";
console.log("Convertions: ", typeof OurString);
let OurNum = parseInt(OurString);
console.log("Convertions: ", typeof OurNum);
let backToString = OurNum + "";
console.log("Convertions: ", typeof backToString);

// -------------------------------- 3rd Question
let fruits = ["Apple", "Orange", "Mango", "Banana", "Guava"];
console.log("Fruits: ", fruits);
const numberArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1); // this will generate random number array
console.log("Number Array: ", numberArray);
const GetLargest = (arr) => {
    if (arr?.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    let max = arr[0];
    arr?.forEach((num) => {
        max = Math.max(num, max);
    });
    return max;
};
console.log("Largest value in the array: ", GetLargest(numberArray));

// --------------------- 4th Objects
const person = {
    name: "Cobra Kai",
    age: 20,
    country: "India"
}
LogPerson(person);

function LogPerson(person) {
    console.log("Person: ", person.name, "|", person['age'], "|", person.country);
}





