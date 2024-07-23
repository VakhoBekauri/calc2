function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById('display').value += char;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(replaceMathSymbols(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function replaceMathSymbols(expression) {
    return expression
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/\^/g, '**')
        .replace(/log/g, 'Math.log');
}



