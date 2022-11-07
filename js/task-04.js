const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const valueEL = document.querySelector('#value');
const btnIncrementEL = document.querySelector('[ data-action="increment"]');

btnDecrementEl.addEventListener('click', onBtnDecrementElClick);
btnIncrementEL.addEventListener('click', onBtnIncrementELClick);

let counterNumber = 0;

function onBtnDecrementElClick(event) {
  counterNumber -= 1;
  valueEL.textContent = counterNumber;
}

function onBtnIncrementELClick(event) {
  counterNumber += 1;
  valueEL.textContent = counterNumber;
}
