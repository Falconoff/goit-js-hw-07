const valueEl = document.querySelector('#value');
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnDec.addEventListener('click', () => {
  // console.log('click on Decrement');
  // console.log(counterValue);
  counterValue = decrement(counterValue);
  // console.log(counterValue);

  valueEl.innerText = counterValue;

  // console.log('valueEl.innerText', valueEl.innerText);
});

btnInc.addEventListener('click', () => {
  // console.log('click on Increment');
  // console.log(counterValue);
  counterValue = increment(counterValue);
  // console.log(counterValue);

  valueEl.innerText = counterValue;

  // console.log('valueEl.innerText', valueEl.innerText);
});

// console.log(counterValue);

function increment(val) {
  return (val += 1);
}

function decrement(val) {
  return (val -= 1);
}

// function changeValue() {
//   const value = 0;
//   increm(){
//     value += 1;
//   }
//   decrem(){
//     value -= 1
//   }

//   return { increm, decrem };
// }
