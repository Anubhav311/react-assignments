let heading = document.querySelector('h1');
let buttons = document.querySelector('button');

function change(){
    heading.style.color="red";

}

buttons.addEventListener('click',change)