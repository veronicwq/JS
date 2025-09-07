//Завдання 1
function countItems(array, condition) {
  let count = 0;
  for (let item of array) {
    if (condition(item)) {
      count++;
    }
  }
  return count;
}

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Коротких слів:', countItems(words, isShort));

//Завдання 2
const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Помилка: ділення на нуль!';
  }
  return a / b;
};

console.log(calculate(10, 5, add)); 

//Завдання 3

function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}


const helloMsg = i => `Привіт! Це повідомлення №${i + 1}`;
const squareMsg = i => `Квадрат числа ${i} = ${i * i}`;
const starMsg = i => '*'.repeat(i + 1);

repeatMessage(3, helloMsg);

//Завдання 4
function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}

const movies = ['Inception', 'Matrix', 'Avatar', 'Interstellar'];


const printMovie = (movie, index) => console.log(`${index + 1}. ${movie}`);
const uppercaseMovie = (movie, index) => console.log(movie.toUpperCase());
const movieLength = (movie, index) => console.log(`${movie} має ${movie.length} символів`);

console.log('Список фільмів:');
processMovies(movies, printMovie);
