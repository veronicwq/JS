/*
 * Типів транзакцій всього два:
 * - поповнення (deposit)
 * - зняття (withdraw)
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція — це об'єкт з властивостями:
 * id, type, amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Викликає createTransaction і додає транзакцію до історії.
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    const { amount: sum } = transaction; // деструктуризація
    this.balance += sum;
    this.transactions.push({ ...transaction });
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Якщо коштів недостатньо — виводить повідомлення.
   */
  withdraw(amount) {
    const { balance } = this; // деструктуризація
    if (amount > balance) {
      console.log("❌ Недостатньо коштів для зняття!");
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    const { amount: sum } = transaction;
    this.balance -= sum;
    this.transactions.push({ ...transaction });
  },

  /*
   * Метод повертає поточний баланс.
   */
  getBalance() {
    const { balance } = this;
    return balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id.
   */
  getTransactionDetails(id) {
    const { transactions } = this;
    return transactions.find(({ id: transId }) => transId === id) || null;
  },

  /*
   * Метод повертає кількість коштів певного типу транзакції.
   */
  getTransactionTotal(type) {
    const { transactions } = this;
    return transactions
      .filter(({ type: t }) => t === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};

/* 🔹 Перевірка роботи */
account.deposit(1000);
account.withdraw(300);
account.deposit(700);
account.withdraw(1200); // недостатньо коштів

console.log("\n💰 Поточний баланс:", account.getBalance());
console.log("📜 Історія транзакцій:", account.transactions);
console.log("🔍 Деталі транзакції #2:", account.getTransactionDetails(2));
console.log("➕ Сума поповнень:", account.getTransactionTotal(Transaction.DEPOSIT));
console.log("➖ Сума зняття:", account.getTransactionTotal(Transaction.WITHDRAW));
