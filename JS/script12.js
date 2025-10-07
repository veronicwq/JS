// Завдання 1
const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

// Додаємо поле mood
user.mood = "happy";

// Замінюємо значення hobby
user.hobby = "skydiving";

// Замінюємо значення premium
user.premium = false;

// Використовуємо деструктуризацію при виведенні
console.log("Завдання 1:");
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Завдання 2
function countProps(obj) {
  const { length } = Object.keys(obj); // деструктуризація властивості length
  return length;
}

// Перевірка
console.log("\nЗавдання 2:");
console.log(countProps(user)); // 5

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
console.log(findBestEmployee(employees)); // "Claire"

// Завдання 4
function countTotalSalary(employees) {
  const values = Object.values(employees);
  let total = 0;

  for (const salary of values) {
    total += salary;
  }
  return total;
}

// Перевірка
const salaries = { John: 1000, Ann: 1600, Pete: 1300 };
console.log("\nЗавдання 4:");
console.log(countTotalSalary(salaries)); // 3900

// Завдання 5
function getAllPropValues(arr, prop) {
  const values = [];
  for (const obj of arr) {
    const { [prop]: value } = obj; // деструктуризація через обчислювану назву властивості
    if (value !== undefined) {
      values.push(value);
    }
  }
  return values;
}

// Перевірка
const products = [
  { name: "apple", price: 50, quantity: 10 },
  { name: "banana", price: 30, quantity: 5 },
  { name: "orange", price: 40, quantity: 8 },
];
console.log("\nЗавдання 5:");
console.log(getAllPropValues(products, "name")); // ["apple", "banana", "orange"]
console.log(getAllPropValues(products, "quantity")); // [10, 5, 8]

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
  for (const { name, price, quantity } of allProducts) { // деструктуризація об’єкта
    if (name === productName) {
      return price * quantity;
    }
  }
  return 0;
}

// Перевірка
console.log("\nЗавдання 6:");
console.log(calculateTotalPrice(products, "apple")); // 500
console.log(calculateTotalPrice(products, "banana")); // 150

// Завдання 7
const account = {
  owner: "John Doe",
  balance: 1000,
  transactions: [],

  deposit(amount) {
    const { transactions } = this;
    this.balance += amount;
    transactions.push({ type: "deposit", amount });
  },

  withdraw(amount) {
    const { balance, transactions } = this;
    if (amount <= balance) {
      this.balance -= amount;
      transactions.push({ type: "withdraw", amount });
    } else {
      console.log("Недостатньо коштів!");
    }
  },

  getBalance() {
    const { balance } = this;
    return balance;
  },

  getTransactions() {
    const { transactions } = this;
    return transactions;
  },
};

// Приклад використання
account.deposit(500);
account.withdraw(200);

console.log("\nЗавдання 7:");
console.log(account.getBalance()); // 1300
console.log(account.getTransactions());
