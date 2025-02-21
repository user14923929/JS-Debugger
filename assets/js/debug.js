function debug() {
    const text = document.getElementById('text');
    const steps = parseInt(document.getElementById('steps').value, 10);
    const output = document.getElementById('output');

    const PROHIBITION_SYMBOLS = ["<", ">", "/"];

    if (text.value.length === 0) {
        output.innerHTML = 'Please enter a text.';
        return;
    } else if (steps < 1) {
        output.innerHTML = 'Minimum steps is 1.';
        return;
    } else if (steps > 100) {
        output.innerHTML = 'Maximum steps is 100.';
        return;
    } else if (PROHIBITION_SYMBOLS.some(symbol => text.value.includes(symbol))) {
        output.innerHTML = `You can't create a html element.`;
        return;
    } else {
        output.innerHTML = 'Starting debug...\n';
        debugger;
        for (let i = 0; i < steps; i++) {
            output.innerHTML += `Step ${i + 1}: ${text.value}\n`;
            debugger;
        }
        output.innerHTML += 'Debug complete.\n';
    }
}