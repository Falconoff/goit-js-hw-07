const inputField = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const defaultName = 'незнакомец';

inputField.addEventListener('input', e => {
  // console.log(e.currentTarget.value);
  // nameOutput.innerText = e.currentTarget.value;
  // if (e.currentTarget.value === '') {
  //   nameOutput.innerText = defaultName;
  // }
  nameOutput.innerText =
    e.currentTarget.value !== '' ? e.currentTarget.value : defaultName;
});
