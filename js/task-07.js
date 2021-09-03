const rangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

changeFontSize();
rangeEl.addEventListener('input', changeFontSize);

function changeFontSize() {
  // console.log(rangeEl.value);
  textEl.style.fontSize = rangeEl.value + 'px';
}
