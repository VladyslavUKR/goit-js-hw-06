const inputRef = document.querySelector('#validation-input');

const valueDataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onValadationValue);

function onValadationValue(event) {
  const value = event.currentTarget.value;

  inputRef.classList.add('invalid');

  value.trim().length === valueDataLength && value.trim() !== ''
    ? inputRef.classList.replace('invalid', 'valid')
    : inputRef.classList.replace('valid', 'invalid');
}
