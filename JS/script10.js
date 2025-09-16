
let bankAccount = {
  ownerName: "Іван Іванов",
  accountNumber: "UA123456789",
  balance: 1000,

  deposit: function(amount) {
    this.balance += amount;
    alert(`Поповнення на ${amount} грн. Ваш залишок: ${this.balance} грн.`);
  },

  withdraw: function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      alert(`Знято ${amount} грн. Ваш залишок: ${this.balance} грн.`);
    } else {
      alert("Недостатньо коштів на рахунку!");
    }
  }
};


if (confirm("Бажаєте поповнити рахунок?")) {
  let sum = parseFloat(prompt("Введіть суму для поповнення:"));
  bankAccount.deposit(sum);
} else if (confirm("Бажаєте зняти кошти?")) {
  let sum = parseFloat(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(sum);
} else {
  alert(`Ваш залишок: ${bankAccount.balance} грн.`);
}


let weather = {
  temperature: 0,
  humidity: 60,
  windSpeed: 5,

  isBelowZero: function() {
    return this.temperature < 0;
  }
};


weather.temperature = parseFloat(prompt("Введіть температуру (°C):"));

if (weather.isBelowZero()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура вище або рівна 0 градусів Цельсія");
}

let user = {
  name: "Петро",
  email: "petro@example.com",
  password: "12345",

  login: function(inputEmail, inputPassword) {
    if (this.email === inputEmail && this.password === inputPassword) {
      alert("Вхід виконано успішно!");
      return true;
    } else {
      alert("Невірний email або пароль!");
      return false;
    }
  }
};

let emailInput = prompt("Введіть email:");
let passwordInput = prompt("Введіть пароль:");
user.login(emailInput, passwordInput);


let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  isHighRated: function() {
    return this.rating > 8;
  }
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Високий рейтинг?", movie.isHighRated());
