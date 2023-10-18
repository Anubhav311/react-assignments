let counterValue = 0;

const display = document.getElementById('display');
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');

function handleIncrease() {
    display.textContent = counterValue + 1;
    counterValue += 1;
}

function handleDecrease() {
    if (counterValue) {
        display.textContent = counterValue - 1;
        counterValue -= 1;
    }
}

inc.addEventListener('click', handleIncrease)
dec.addEventListener('click', handleDecrease)