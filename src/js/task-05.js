const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

//* listener
input.addEventListener('input', () => {
  output.textContent = input.value.trim() || 'Anonymous';
});
