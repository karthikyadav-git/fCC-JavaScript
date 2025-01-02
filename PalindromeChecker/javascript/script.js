// select elements
const input = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

// convert input to alphanumeric
const toAlphanumeric = (inputString) => {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
};

// string reversal function
const reverse = (str) => {
    return str.split('').reverse().join('');
};

const checkPalindrome = () => {
    const originalInput = input.value;

    if (!input.value.trim()) {
        alert("Please input a value");
        return;
    }

    const alphanum = toAlphanumeric(input.value.toLowerCase());

    if (alphanum === reverse(alphanum)) {
        result.innerHTML = `${originalInput} is a palindrome`;
    }
    else {
       result.innerHTML = `${originalInput} is not a palindrome`;
    }

    input.value = '';
};

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkPalindrome();
    }
});