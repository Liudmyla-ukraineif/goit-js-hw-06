// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputFontSizeControlRef = document.getElementById('font-size-control');
const textSpanControlRef = document.getElementById('text');

inputFontSizeControlRef.addEventListener('input', onChangeFontSize);

function onChangeFontSize(even) {
  const computedStyleSpan = getComputedStyle(textSpanControlRef);
  textSpanControlRef.style.fontSize = even.currentTarget.value + "px";

  // console.log(computedStyleSpan.fontSize);
  // console.log(even.currentTarget.value);
};

