function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const refs = {
  // formNumberColection: document.getElementById('controls'),
  numberElementBoxes: document.querySelector('#controls input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', onClickCreate);
refs.btnDestroy.addEventListener('click', () => {
  destroyBoxes.call()});

function onClickCreate(event) {
  const number = refs.numberElementBoxes.value;
  console.log(number);
  let boxesToAdd = createBoxes(number)
  boxes.append(...boxesToAdd)
};

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
      const blockDiv = document.createElement('div');
      blockDiv.style.height = `${30 + 10 * i}px`;
      blockDiv.style.width = `${30 + 10 * i}px`;
      blockDiv.style.background = getRandomHexColor();
      elementsToAdd.push(blockDiv);
  };
  return elementsToAdd

}
const destroyBoxes = () => {
    boxes.innerHTML = ''
}