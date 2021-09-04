const valueEl = document.querySelector('#value');
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnDec.addEventListener('click', () => {
  counterValue = decrement(counterValue);
  valueEl.innerText = counterValue;
});

btnInc.addEventListener('click', () => {
  counterValue = increment(counterValue);
  valueEl.innerText = counterValue;
});

function increment(val) {
  return (val += 1);
}

function decrement(val) {
  return (val -= 1);
}
