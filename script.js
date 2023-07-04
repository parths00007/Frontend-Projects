function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate(operator) {
    const result = document.getElementById('result');
    const expression = result.value;

    if (expression) {
        try {
            const output = eval(expression);
            result.value = output;
        } catch (error) {
            result.value = 'Error';
        }
    }
}