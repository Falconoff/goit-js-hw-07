const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

[...categories.children].map(category => {
  console.log('Категория:', category.firstElementChild.innerText);
  console.log(
    'Количество элементов:',
    category.lastElementChild.children.length,
  );
});
