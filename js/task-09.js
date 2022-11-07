const changerButton = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const textColor = document.querySelector('.color');

changerButton.addEventListener('click', onChangerButton);

function onChangerButton() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
