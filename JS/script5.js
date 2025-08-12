// 1. Вивести всі числа від 1 до 10 за допомогою while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log('---');

// 2. Вивести всі парні числа від 2 до 20 за допомогою for. Якщо число парне — пропустити його (continue)
for (let j = 2; j <= 20; j++) {
  if (j % 2 === 0) {
    continue; // пропускає парні
  }
  console.log(j); // виведе тільки непарні
}

console.log('---');

// 3. Таблиця множення числа 7
for (let k = 1; k <= 10; k++) {
  console.log(`7 x ${k} = ${7 * k}`);
}

console.log('---');

// 4. Вивести всі числа, менші за n, і зупинити цикл при >= n
let n = 8;
for (let m = 1; m <= 20; m++) {
  if (m >= n) {
    break;
  }
  console.log(m);
}

console.log('---');

// 5. Вивести всі числа від 1 до 20, крім кратних 3 (while)
let t = 1;
while (t <= 20) {
  if (t % 3 === 0) {
    t++;
    continue;
  }
  console.log(t);
  t++;
}