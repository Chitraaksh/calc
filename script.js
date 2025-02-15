const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate(){
    const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/'); // Replace × with * and ÷ with /
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); 
}

let pressTimer;

function startPress() {
    pressTimer = setTimeout(clearDisplay, 1000); 
}

function endPress() {
    clearTimeout(pressTimer); 
    backspace();
}