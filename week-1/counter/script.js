const numberdisplay = document.getElementById('number');
const increasebutton = document.getElementById('increasebutton');
const decreasebutton = document.getElementById('decreasebutton');

let count = 0;

function updateNumber() {
    numberdisplay.textContent = count;
}
increasebutton.addEventListener('click', function() {
    count++;
    updateNumber();
});

decreasebutton.addEventListener('click', function() {
    if (count > 0) {
        count--;
        updateNumber();
    }
});



