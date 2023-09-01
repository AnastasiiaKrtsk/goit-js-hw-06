const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//* querySelector
//* map/foreach
//* createElement
//* add
//* append
/*<li class = 'item'>Potatoes</li> */

//*map
const task = document.querySelector('#ingredients');
const list = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el; //* text = el of ingredients
  li.classList.add('item');
  return li;
});
task.append(...list); //* розпакувати масив що створив map

//*foreach
// const task = document.querySelector('#ingredients');
//? ingredients.forEach(el => {
//   const li = document.createElement('li');
//   li.textContent = el;
//   li.classList.add('item');
//?   task.append(li);
// });
