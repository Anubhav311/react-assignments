// Get all the DOM Elements
let displayShow = "";
let currentSign = "+";


const displayElement = document.getElementById("display");
const clearAllButton = document.getElementById("clearAll");
const backSpaceButton = document.getElementById("delete");

const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multiButton = document.getElementById("multi");
const divideButton = document.getElementById("divide");

const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");

const openButton = document.getElementById("opening");
const closeButton = document.getElementById("closing");
const dotButton = document.getElementById("decimal");
const equalButton = document.getElementById("result");

function evaluateExpression() {
    try {
        const result = eval(displayShow);
        if (isFinite(result)) {
            displayElement.textContent = result;
        } else {
            displayElement.textContent = "Invalid Expression! 🐍";
        }
    } catch (error) {
        displayElement.textContent = "Invalid Expression! 🐍";
        // console.error("Error while evaluating expression:", error);
    }
}

// Event Listener action
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    if (buttonValue === "CE") {
        displayShow = "";
    } else {
        displayShow += buttonValue;
    }

    displayElement.textContent = displayShow;
}

function handleBackSpace() {
    if (displayShow.length > 0) {
        displayShow = displayShow.slice(0, -1);
        displayElement.textContent = displayShow;
    }
}

// Add click event listeners to all the buttons
clearAllButton.addEventListener("click", handleButtonClick);
addButton.addEventListener("click", handleButtonClick);
oneButton.addEventListener("click", handleButtonClick);
twoButton.addEventListener("click", handleButtonClick);
threeButton.addEventListener("click", handleButtonClick);
subButton.addEventListener("click", handleButtonClick);
fourButton.addEventListener("click", handleButtonClick);
fiveButton.addEventListener("click", handleButtonClick);
sixButton.addEventListener("click", handleButtonClick);
multiButton.addEventListener("click", handleButtonClick);
sevenButton.addEventListener("click", handleButtonClick);
eightButton.addEventListener("click", handleButtonClick);
nineButton.addEventListener("click", handleButtonClick);
divideButton.addEventListener("click", handleButtonClick);
zeroButton.addEventListener("click", handleButtonClick);
dotButton.addEventListener("click", handleButtonClick);
openButton.addEventListener("click", handleButtonClick);
closeButton.addEventListener("click", handleButtonClick);
backSpaceButton.addEventListener("click", handleBackSpace);

equalButton.addEventListener("click", evaluateExpression);


