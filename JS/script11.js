// Завдання 1
const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true
};

// Додаємо поле mood
user.mood = "happy";

// Замінюємо значення hobby
user.hobby = "skydiving";

// Замінюємо значення premium
user.premium = false;

// Виводимо ключі та значення
console.log("Завдання 1:");
for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}

// Завдання 2
function countProps(obj) {
  return Object.keys(obj).length;
}

// Перевірка
console.log("\nЗавдання 2:");
console.log(countProps(user)); // Має вивести 5

// Завдання 3
function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";
  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
}

// Перевірка
const employees = { Ann: 29, Bob: 35, Claire: 42 };
console.log("\nЗавдання 3:");
console.log(findBestEmployee(employees)); // Має вивести "Claire"

// Завдання 4
function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

// Перевірка
const salaries = { John: 1000, Ann: 1600, Pete: 1300 };
console.log("\nЗавдання 4:");
console.log(countTotalSalary(salaries)); // Має вивести 3900

// Завдання 5
function getAllPropValues(arr, prop) {
  const values = [];
  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }
  return values;
}

// Перевірка
const products = [
  { name: "apple", price: 50, quantity: 10 },
  { name: "banana", price: 30, quantity: 5 },
  { name: "orange", price: 40, quantity: 8 }
];
console.log("\nЗавдання 5:");
console.log(getAllPropValues(products, "name")); // ["apple", "banana", "orange"]
console.log(getAllPropValues(products, "quantity")); // [10, 5, 8]

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0; // Якщо продукт не знайдено
}

// Перевірка
console.log("\nЗавдання 6:");
console.log(calculateTotalPrice(products, "apple")); // 50 * 10 = 500
console.log(calculateTotalPrice(products, "banana")); // 30 * 5 = 150

// Завдання 7 — приклад базового інтернет-банку
const account = {
  owner: "John Doe",
  balance: 1000,
  transactions: [],
  
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount });
  },
  
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount });
    } else {
      console.log("Недостатньо коштів!");
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactions() {
    return this.transactions;
  }
};

// Приклад використання
account.deposit(500);
account.withdraw(200);
console.log("\nЗавдання 7:");
console.log(account.getBalance()); // 1300
console.log(account.getTransactions());
