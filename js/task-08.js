const numInputField = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

// console.dir(numInputField);

// numInputField.addEventListener('change', () => {
//   console.log(numInputField.value);
// });

renderBtn.addEventListener('click', () => {
  // console.log('click Create', 'numInputField=', numInputField.value);
  createBoxes(numInputField.value);
});

destroyBtn.addEventListener('click', () => {
  // console.log('click destroy');
  boxesContainer.innerHTML = '';
});

function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    // console.log(`create ${i + 1}-div`);

    const divEl = document.createElement('div');
    // divEl.classList.add('box');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = `rgb(
      ${getRandomInt(255)},
      ${getRandomInt(255)},
      ${getRandomInt(255)}
    )`;
    divEl.style.margin = '1px';
    // console.log(divEl.style.width);
    // console.log(divEl);
    boxesArray.push(divEl);
  }
  // console.log(boxesArray);
  boxesContainer.append(...boxesArray);
}

function getRandomInt(max) {
  return Math.round(Math.random() * max);
}
