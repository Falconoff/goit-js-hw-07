const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

// ----- first variant -----------
// const category = document.querySelectorAll('.item');

// category.forEach(category => {
//   console.log('Категория:', category.firstElementChild.innerText);
//   console.log(
//     'Количество элементов:',
//     category.lastElementChild.children.length,
//   );
// });

// ----- another variant -----------
for (const category of categories.children) {
  console.log('Категория:', category.firstElementChild.innerText);
  console.log(
    'Количество элементов:',
    category.lastElementChild.children.length,
  );
}

console.log(categories.children);
// ----------------------
categories.children.map(category => {
  console.log('Категория:', category.firstElementChild.innerText);
  console.log(
    'Количество элементов:',
    category.lastElementChild.children.length,
  );
});
