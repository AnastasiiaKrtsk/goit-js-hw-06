// Створи змінну counterValue, в якій буде зберігатися поточне значення
//лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
//значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const valueSpan = document.querySelector('#value'); //*found span
const decrementButton = document.querySelector("[data-action='decrement']"); //* found button
const incrementButton = document.querySelector("[data-action='increment']");

//*function to update Counter
function updateCounter(el) {
  counterValue += el;
  valueSpan.textContent = counterValue; //* content depends on counter
}

//*listenners:
decrementButton.addEventListener('click', () => {
  updateCounter(-1);
});

incrementButton.addEventListener('click', () => {
  updateCounter(1);
});
