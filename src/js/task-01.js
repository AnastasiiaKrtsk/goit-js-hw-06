//* 1. створюємо змінну де шукаємо лішку
//* 2. виводимо в консоль довжину змінної з написом що треба
//* 3. за допомогою фор ич перебираємо де створюємо 2 змінні і
//* виписуємо назву і кількість текст контент і довжина ul li

const task = document.querySelectorAll('#categories .item'); //* all with '#categories .item'

console.log(`Number of categories: ${task.length}`);

task.forEach(el => {
  const category = el.querySelector('h2').textContent; //* category = li >>> li in ul
  const elements = el.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements}`);
});

// Number of categories: 3
// Category: Animals
// Elements: 4
