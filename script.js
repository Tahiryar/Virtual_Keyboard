const keys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', 
    'Space', 'Backspace'
];

const keyboardDiv = document.getElementById('keyboard');
const inputField = document.getElementById('input');

// Create keys and add event listeners
keys.forEach(key => {
    const keyDiv = document.createElement('div');
    keyDiv.textContent = key;
    keyDiv.classList.add('key');
    
    keyDiv.addEventListener('click', () => {
        if (key === 'Space') {
            inputField.value += ' ';
        } else if (key === 'Backspace') {
            inputField.value = inputField.value.slice(0, -1);
        } else {
            inputField.value += key;
        }
    });
    
    keyboardDiv.appendChild(keyDiv);
});

