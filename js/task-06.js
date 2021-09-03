const inputField = document.getElementById('validation-input');

// console.log(typeof Number(inputField.dataset.length)); // 6
inputField.classList.add('invalid');

inputField.addEventListener('change', e => {
  // console.log(typeof e.currentTarget.value.length);

  // console.log(
  //   'e.currentTarget.value.length',
  //   e.currentTarget.value.length,
  //   typeof e.currentTarget.value.length,
  // );
  // console.log(
  //   'inputField.dataset.length',
  //   Number(inputField.dataset.length),
  //   // typeof inputField.dataset.length,
  // );

  if (e.currentTarget.value.length === Number(inputField.dataset.length)) {
    inputField.classList.replace('invalid', 'valid');
  } else {
    inputField.classList.replace('valid', 'invalid');
  }

  // console.log(inputField.classList);
});
