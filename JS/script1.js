let age = 20;
console.log(age);

let name = "Андрій";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = "Життя – це мистецтво робити помилки і любити їх.";
console.log(myString);

let myNumber = 15;
myNumber = myNumber + 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

let userName = prompt("Введіть своє ім’я");
alert("Ваше ім’я: " + userName);
console.log(typeof userName);

let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log(userAnswer);

alert("Увага! Дія може бути небезпечною.");
let confirmAction = confirm("Ви впевнені, що хочете продовжити?");
if (confirmAction) {
    console.log("Користувач підтвердив дію.");
} else {
    console.log("Користувач скасував дію.");
}
