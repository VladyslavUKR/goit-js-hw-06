const formRef = document.querySelector('form.login-form');

function onSubmit(event) {
  event.preventDefault();

  if (event.currentTarget[0].value && event.target[1].value !== '') {
    const valuesUser = new FormData(event.currentTarget);
    valuesUser.forEach((value, name) => {
      console.log(value);
      console.log(name);
    });
  } else {
    alert('🤨👉 ❗️❗️❗️Усі поля повинні бути заповенні❗️❗️❗️');
  }
  formRef.reset();
}

formRef.addEventListener('submit', onSubmit);
