/**
 DOM Manipulation:
 - create an HTML page
 - put some paragraph text in it
 - create a button, and when you click on the button it should change the color of the text you created above.
 - do the styling ina separate CSS file and link it with HTMl file.
 - functinality should be in javascript file

Create counter:
 - create an html file and render a number, an increase button, a decrease butotn
 - create a javscript file and impelent the increase and decrease functionality.
 - implement logic that the number should not go below zero. 
 - give it some styles in css file and link it with html
 */

 function changeTextColor() {
    const textElement = document.getElementById("textToChange");
    textElement.style.color = "red"; // You can change the color to your desired one
}

// create a javscript file and impelent the increase and decrease functionality

const numberDisplay = document.getElementById("numberDisplay");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");

let currentNumber = 0;

// Function to update and display the number
function updateNumber() {
    numberDisplay.textContent = currentNumber;
}

// Event listener for the increase button
increaseButton.addEventListener("click", () => {
    currentNumber++;
    updateNumber();
});

// Event listener for the decrease button
// implement logic that the number should not go below zero
decreaseButton.addEventListener("click", () => {
    if (currentNumber > 0) {
        currentNumber--;
        updateNumber();
    }
});


