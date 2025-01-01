// select elements
const input = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

// convert input to alphanumeric
const toAlphanumeric = (inputString) => {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
};

// string reversal function
const reverse = (normal) => {
    return normal.split('').reverse().join('');
};

// check event
checkButton.addEventListener("click", 
    () => {
        alphanum = toAlphanumeric(input.value.toLowerCase());
        let output;
        if (alphanum === reverse(alphanum)) {
            output = `${input.value} is a palindrome.`;
        }
        else {
            output = `${input.value} is not a palindrome.`;
        }
        result.innerHTML = output;
        input.value = '';
    }
);