const numInputField = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

renderBtn.addEventListener('click', () => {
  createBoxes(numInputField.value);
});

destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});

function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = `rgb(
      ${getRandomInt(255)},
      ${getRandomInt(255)},
      ${getRandomInt(255)}
    )`;
    divEl.style.margin = '1px';
    boxesArray.push(divEl);
  }
  boxesContainer.append(...boxesArray);
}

function getRandomInt(max) {
  return Math.round(Math.random() * max);
}
