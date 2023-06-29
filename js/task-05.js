const nameInput = document.getElementById('name-input');
const nameOutpot = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() !== '') {
        nameOutpot.textContent = nameInput.value;
    } else {
        nameOutpot.textContent = 'Anonymous';
    }
});