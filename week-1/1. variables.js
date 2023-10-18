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

//variables
const my_name = "raj" ;
const age = 18;

console.log(my_name,age);

//datatypes
let [a_string, b_int, c_boolean] = ["my_string",10, true];

console.log(a_string,b_int,c_boolean);

console.log(typeof a_string,typeof b_int,typeof c_boolean );

let num_string = Number('567');

console.log(typeof num_string);

//arrays
let fruits = ["apple", "banana", "pineapple", "grapes"];

let num_array = [56, 45,76,32,89,65,43,32,1];
console.log(num_array);
let greatest_num = 0;
for (let i in num_array){
    if (num_array[i]>greatest_num){
        greatest_num = num_array[i]
    };
}
console.log(greatest_num)

//objects
person_data = { 1: {name:'raj', age:18, country: 'india'}, 2: {name: 'sam', age: 12, country:'america'}, 3: {name: 'gwen', age: 15, country: 'germany'}}
function getData(personId) {
    if (person_data.hasOwnProperty(personId)) {
        const personInfo = person_data[personId];
        console.log(`Name: ${personInfo.name}`);
        console.log(`Age: ${personInfo.age}`);
        console.log(`Country: ${personInfo.country}`);
    }
    else{
        console.log(`Person with ID ${personId} not found.`)
    }
};

getData(2)
