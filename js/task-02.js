const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const navUlIngredientsRef = document.querySelector('#ingredients');

const elemLi = ingredients.map (element => {
  const navLiIngredients = document.createElement('li');
  navLiIngredients.textContent = element;
  navLiIngredients.classList.add('item');
  console.log(navLiIngredients);
  return navLiIngredients;
});

navUlIngredientsRef.append(...elemLi);