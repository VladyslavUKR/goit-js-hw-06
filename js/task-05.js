const inputRef = document.querySelector('#name-input');
const textGreetingRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputRefInput);

function onInputRefInput(event) {
  textGreetingRef.textContent = event.currentTarget.value;
}
