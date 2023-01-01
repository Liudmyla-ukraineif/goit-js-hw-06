// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.getElementById('name-input');
const spanTextRef = document.getElementById('name-output');
console.log(inputRef);

inputRef.addEventListener('input', onChengeInput);

function onChengeInput(even) {
  
  console.log(even.currentTarget.value);
  spanTextRef.textContent = even.currentTarget.value;
  (even.currentTarget.value === '') ? spanTextRef.textContent = 'Anonymous' : spanTextRef.textContent = even.currentTarget.value;
}


