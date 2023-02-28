let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51 ,27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1) Знайти суму та кількість позитивних елементів.
let positiveSum = 0;
let positiveQuantity = 0;

for (const element of array) {
  if (element > 0) {
    positiveSum += element;
    positiveQuantity++;
  }
}
console.log(positiveSum, positiveQuantity);

// // 2) Знайти мінімальний елемент масиву та його порядковий номер.
let minValue = 0;

for (const element of array) {
  if (minValue >= element) {
    minValue = element;
  }
}
console.log(minValue, array.indexOf(minValue)+1);

// // 3) Знайти максимальний елемент масиву та його порядковий номер.
let maxValue = 0;

for (const element of array) {
  if (maxValue <= element) {
    maxValue = element;
  }
}
console.log(maxValue, array.indexOf(maxValue)+1);

// 4) Визначити кількість негативних елементів.
let negativeQuantity = 0;

for (const element of array) {
  if (element < 0) {
    negativeQuantity++;
  }
}
console.log(negativeQuantity);

// 5) Знайти кількість непарних позитивних елементів.
let positiveOddQuantity = 0;

for (const element of array) {
  if (element % 2 === 1) {
    positiveOddQuantity++;
  }
}
console.log(positiveOddQuantity);

// 6) Знайти кількість парних позитивних елементів.
let positiveEvenQuantity = 0;

for (const element of array) {
  if (element > 0 && element % 2 === 0) {
    positiveEvenQuantity++;
  }
}
console.log(positiveEvenQuantity);

// 7) Знайти суму парних позитивних елементів.
let positiveEvenSum = 0;

for (const element of array) {
  if (element > 0 && element % 2 === 0) {
    positiveEvenSum += element;
  }
}
console.log(positiveEvenSum);

// 8) Знайти суму непарних позитивних елементів.
let positiveOddSum = 0;

for (const element of array) {
  if (element % 2 === 1) {
    positiveOddSum += element;
  }
}
console.log(positiveOddSum);

// 9) Знайти добуток позитивних елементів.
let positiveProduct = 1;

for (const element of array) {
  if (element > 0) {
    positiveProduct *= element;
  }
}
console.log(positiveProduct);

// 10) Знайти найбільший серед елементів масиву, остальні обнулити.
for (let counter = 0; counter < array.length; counter++) {
  if (maxValue !== array[counter]) {
    array[counter] = 0;
  }
}
console.log(maxValue, array);