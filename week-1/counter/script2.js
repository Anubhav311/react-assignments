// script.js
document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const increaseButton = document.getElementById("increaseButton");
    const decreaseButton = document.getElementById("decreaseButton");

    let counterValue = 0;

    // Function to update the counter and display it
    function updateCounter() {
        counterElement.textContent = counterValue;
    }

    // Function to increase the counter
    function increaseCounter() {
        counterValue++;
        updateCounter();
    }

    // Function to decrease the counter (with a minimum value of 0)
    function decreaseCounter() {
        if (counterValue > 0) {
            counterValue--;
            updateCounter();
        }
    }

    // Add click event listeners to the buttons
    increaseButton.addEventListener("click", increaseCounter);
    decreaseButton.addEventListener("click", decreaseCounter);

    // Initial counter update
    updateCounter();
});
