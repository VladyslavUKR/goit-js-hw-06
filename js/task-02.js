const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const idListEL = document.querySelector('#ingredients');

const resultingredient = [];
for (const ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  itemEl.style.listStyle = 'none';
  resultingredient.push(itemEl);
}
idListEL.append(...resultingredient);
