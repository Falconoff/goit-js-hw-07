const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

// ---------- first -------------
// const ingredientsLayoutArray = [];

// for (const item of ingredients) {
//   const li = document.createElement('li');
//   li.textContent = item;
//   ingredientsLayoutArray.push(li);
// }
// ingredientsList.append(...ingredientsLayoutArray);

// -------------- second -------------
// const ingredientsLayoutArray = ingredients.map(item => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   return li;
// });
// ingredientsList.append(...ingredientsLayoutArray);

// ------------- third (function) ------------
const makeListFromArray = array => {
  return array.map(item => {
    const li = document.createElement('li');
    li.textContent = item;

    return li;
  });
};

// const ingredientsLayoutArray = makeListFromArray(ingredients);
// ingredientsList.append(...ingredientsLayoutArray);

ingredientsList.append(...makeListFromArray(ingredients));
