//For
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', ';
  }
}

console.log(string); 

//join
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

const string = friends.join(', ');

console.log(string); // "Mango, Poly, Kiwi, Ajax"

//splice
const cards = [
  'Картка-1',
  'Картка-2',
  'Картка-3',
  'Картка-4',
  'Картка-5',
];

const cardToRemove = 'Картка-3';
const index = cards.indexOf(cardToRemove);

if (index !== -1) {
  cards.splice(index, 1);
}

console.log(cards);

//Видалити
const cardToDelete = 'Карточка-3';
const indexToDelete = cards.indexOf(cardToDelete);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}

//Додати
const cardToInsert = 'Карточка-6';
const insertIndex = 2;

cards.splice(insertIndex, 0, cardToInsert);

//Оновити
const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards[indexToUpdate] = 'Карточка-4 (оновлена)';
}
