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


// Variable Basics:************************************************************************************************
var myName = "vikash_singh";
var myAge = 30;
console.log("My name is " + myName);
console.log("I am " + myAge + " years old");


//Explore data types and type conversion:***************************************************************************

var stringVariable = "vikash_singh";
var numberVariable = 25;
var booleanVariable = true;
console.log(stringVariable);
console.log(numberVariable);
console.log(booleanVariable);

function stringToNumber(inputString) {
    return parseFloat(inputString);
}
var numericString = "123.45";
var convertedFromString = stringToNumber(numericString);
console.log("string to number: " + convertedFromString, typeof(convertedFromString));

//Arrays:**********************************************************************************************************
var favoriteFruits = ["apple", "banana", "strawberry", "orange", "grape"];
console.log("My favorite fruits" + favoriteFruits)

function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    var min_index = 0;
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[min_index]) {
            min_index = i
        }
    }

    return numbers[min_index];
}
var numbersArray = [10, 25, 4, 45, 32, 67, 98, 1, 68, 909, 100000];

var largestNumber = findLargestNumber(numbersArray);
console.log("The largest number in the array " + largestNumber);

//  Objects:*************************************************************************************

var person = {
    name: "vikash-singh",
    age: 26,
    country: "india",
    state: "uttar pradesh"
};

function logPersonInfo(personObj) {
    console.log("Name: " + personObj.name);
    console.log("Age: " + personObj.age);
    console.log("Country: " + personObj.country);
    console.log("Country: " + personObj.state);
}
logPersonInfo(person);