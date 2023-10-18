// Create variables to store and log information:
MyName = "RAJAN";
Age = 22;
console.log("Student name is " + MyName, "and age is", Age);

// Explore data types and type conversion:

console.log(typeof MyName);
console.log(typeof Age);

//Convert string to Number
let number = "1299";
console.log(number, "string to number", parseInt(number));

// Array Program
let array = ["Apple", "Banana", "grape"];
console.log(array);

//Find largest Number in i

function largest(arr) {
  let i;

  // Initialize maximum element
  let max = arr[0];

  // Traverse array elements
  // from second and compare
  // every element with current max
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

// Driver code
let arr = [10, 324, 55555, 90, 8];
console.log("Largest in given array is " + largest(arr));

// Objects:

let person = {
  firstName: "MSD",
  lastName: "Dhoni",
  age: 50,
  eyeColor: "blue",
  country: "BHARAT",
};
console.log(person);
