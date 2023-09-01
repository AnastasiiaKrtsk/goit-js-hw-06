const validation = document.querySelector('#validation-input');

//* listener
validation.addEventListener('blur', () => {
  const length = parseInt(validation.getAttribute('data-length')); //* took the length with parceint
  const inputValue = validation.value.length; //* value приймає інпут

  if (inputValue === length) {
    validation.classList.remove('invalid');
    validation.classList.add('valid');
  } else {
    validation.classList.remove('valid');
    validation.classList.add('invalid');
  }
});

// validation.addEventListener('blur', () => {
// const length = parseInt(validation.getAttribute('data-length'));
// const inputValue = validation.value.length;

//? const isValid = inputValue === length;
//? validation.classList.toggle('valid', isValid); // якщо тру додає валід
//? validation.classList.toggle('invalid', !isValid); // якщо фолс  інвалід
// });
