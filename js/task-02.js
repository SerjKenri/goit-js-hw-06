const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const tableEl = document.querySelector('#ingredients');

const ceatedEl = ingredients.map((element) => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  tableEl.appendChild(item);
})



console.log(tableEl);