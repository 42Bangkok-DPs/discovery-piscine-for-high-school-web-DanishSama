const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    // Validate input
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        alert('Error :(');
        return;
    }

    let result;

    // Check for division or modulo by zero
    if ((operator === '/' || operator === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // Perform calculation
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            alert('Invalid operator');
            return;
    }

    // Display result
    alert(`Result: ${result}`);
    console.log(result);
});

// Alert every 30 seconds
setInterval(() => {
    alert('Please, use me...');
}, 30000);