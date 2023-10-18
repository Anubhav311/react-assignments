const textRef = document.getElementById('color-text');

const handleColorChange = () => {
    // here we'll generate some random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    textRef.style.background = randomColor;
}

textRef.addEventListener('click', handleColorChange);