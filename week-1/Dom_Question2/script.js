const zero = document.getElementById('zero');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const color_change = document.getElementById("color_change")
let counterValue = 0;

function handleIncrease() {
    zero.textContent = counterValue + 1;
    counterValue += 1;
}

function handleDecrease() {
    if (counterValue) {
        zero.textContent = counterValue - 1;
        counterValue -= 1;
    }
}
const handleColorChange = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color_change.style.background = randomColor;
}

function handleBoth() {
    handleIncrease();
    handleColorChange();
}

inc.addEventListener('click', handleBoth);
dec.addEventListener('click', handleDecrease)