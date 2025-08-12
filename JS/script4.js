// 1. Симуляція вибору варіанта зі списку
let drink = "Чай"; // Можливі варіанти: "Кава", "Чай", "Сік"

switch (drink) {
    case "Кава":
        console.log("Ви обрали каву.");
        break;
    case "Чай":
        console.log("Ви обрали чай.");
        break;
    case "Сік":
        console.log("Ви обрали сік.");
        break;
    default:
        console.log("Невідомий напій.");
}

// 2. День тижня
let day = "субота"; // Можливі варіанти: понеділок, ..., неділя

switch (day.toLowerCase()) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п’ятниця":
        console.log("Сьогодні робочий день.");
        break;
    case "субота":
    case "неділя":
        console.log("Сьогодні вихідний!");
        break;
    default:
        console.log("Невідомий день тижня.");
}

// 3. Пора року за номером місяця
let month = 8; // 1-12

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зараз зима.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Зараз весна.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Зараз літо.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Зараз осінь.");
        break;
    default:
        console.log("Невірний номер місяця.");
}

// 4. Світлофор
let color = "жовтий"; // червоний, зелений, жовтий

switch (color.toLowerCase()) {
    case "червоний":
        console.log("СТОП!");
        break;
    case "зелений":
        console.log("ЙТИ!");
        break;
    case "жовтий":
        console.log("ЧЕКАТИ!");
        break;
    default:
        console.log("Невідомий колір світлофора.");
}

// 5. Калькулятор
let num1 = 10;
let num2 = 0;
let operator = "/"; // +, -, *, /

switch (operator) {
    case "+":
        console.log(`Результат: ${num1 + num2}`);
        break;
    case "-":
        console.log(`Результат: ${num1 - num2}`);
        break;
    case "*":
        console.log(`Результат: ${num1 * num2}`);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Помилка: ділення на нуль!");
        } else {
            console.log(`Результат: ${num1 / num2}`);
        }
        break;
    default:
        console.log("Невідомий оператор.");
}