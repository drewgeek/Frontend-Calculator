let output = document.getElementById('output');

function appendToOutput(value) {
    output.value += value;
}

function clearOutput() {
    output.value = '';
}

function backspace() {
    output.value = output.value.slice(0, -1);
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}