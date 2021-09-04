const inputField = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const defaultName = 'незнакомец';

inputField.addEventListener('input', e => {
  nameOutput.innerText =
    e.currentTarget.value !== '' ? e.currentTarget.value : defaultName;
});
