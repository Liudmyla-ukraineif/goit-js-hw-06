// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputRef = document.getElementById('validation-input');
console.dir(inputRef);
console.log(inputRef.dataset.length);

inputRef.addEventListener('blur', onValidInput);

function onValidInput(event) {
  console.log(event);
  console.log(event.currentTarget.value.length)
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    } else {
      inputRef.classList.add('invalid');
      inputRef.classList.remove('valid');
    }
  }