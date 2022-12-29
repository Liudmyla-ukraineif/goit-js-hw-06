// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;

const counterRef = document.getElementById('value');

const decrementRef = document.querySelector('button[data-action="decrement"]');
decrementRef.addEventListener('click', onClickDecrement);

const incrementRef = document.querySelector('button[data-action="increment"]');
incrementRef.addEventListener('click', onClickIncrement);

function onClickDecrement () {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};

function onClickIncrement () {
  counterValue += 1;
  counterRef.textContent = counterValue;
};