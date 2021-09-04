const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const makeListFromArray = array => {
  return array.map(item => {
    const li = document.createElement('li');
    li.textContent = item;

    return li;
  });
};

ingredientsList.append(...makeListFromArray(ingredients));
