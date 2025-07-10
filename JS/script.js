let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth);
console.log(minutesInMonth);

let health = 100;
let energy = 80;
health -= 20;
energy -= 30;
console.log(health);
console.log(energy);

let totalPrice = 500;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);
console.log(discountedPrice);

const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);

let number = 81;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log(convertedInt);
console.log(convertedString);
