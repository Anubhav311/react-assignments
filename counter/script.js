let Paragraphs = document.getElementById('Paragraph');
let Increses = document.getElementById('Increse');
let Decreses = document.getElementById('Decrese');
let counter=0;

function Add(){
counter=counter+1;
Paragraphs.textContent=counter;
}
Increses.addEventListener('click',Add);
function Sub(){
    counter=counter-1;
    Paragraphs.textContent=counter;
    }
    Decreses.addEventListener('click',Sub);

