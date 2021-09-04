const inputField = document.getElementById('validation-input');

inputField.classList.add('invalid');

inputField.addEventListener('change', e => {
  if (e.currentTarget.value.length === Number(inputField.dataset.length)) {
    inputField.classList.replace('invalid', 'valid');
  } else {
    inputField.classList.replace('valid', 'invalid');
  }
});
