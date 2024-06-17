const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
}

function appendCharacter(character) {
    display.textContent += character;
}

function toggleSign() {
    const currentDisplay = display.textContent;
    if (currentDisplay) {
        display.textContent = currentDisplay.startsWith('-') 
            ? currentDisplay.substring(1) 
            : '-' + currentDisplay;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace('÷', '/').replace('×', '*'));
    } catch (e) {
        display.textContent = 'Error';
    }
}
