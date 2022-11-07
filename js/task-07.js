const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('span');

let textFontSize = (textRef.style.fontSize = '');

inputRef.addEventListener('input', onInput);

function onInput(event) {
  let textFontSize = (textRef.style.fontSize = `${event.currentTarget.value}px`);
}
