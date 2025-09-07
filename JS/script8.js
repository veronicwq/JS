//Завдання 1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(['Mango', 'Poly', 'Ajax']);
//Завдання 2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10))
//Завдання 3
function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//Завдання 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + '...';
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//Завдання 5
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes('spam') || lowerMessage.includes('sale');
}
сonsole.log(checkForSpam('This is just a message'));
//Завдання 6
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число:');
  if (input === null) {
    break; 
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Було введено не число, попробуйте ще раз');
  } else {
    numbers.push(input);
  }
}

if (numbers.length > 0) {
  for (let num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
