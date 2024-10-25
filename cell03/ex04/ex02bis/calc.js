$(document).ready(function() {
    $('#calculateBtn').click(function() {
        const num1 = parseInt($('#num1').val());
        const num2 = parseInt($('#num2').val());
        const operator = $('#operator').val();

        if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
            alert('Error :(');
            return;
        }

        let result;

        if ((operator === '/' || operator === '%') && num2 === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

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

        alert(`Result: ${result}`);
        console.log(result);
    });

    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});
