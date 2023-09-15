// script.js
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const button = document.getElementById("changeColorButton");
  
    // Function to change text color
    function changeTextColor() {
      // Generate a random color using hexadecimal values
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      textElement.style.color = randomColor;
    }
  
    // Add click event listener to the button
    button.addEventListener("click", changeTextColor); 
  });
  