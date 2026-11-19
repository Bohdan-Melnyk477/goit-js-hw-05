// Оголошено змінну getTotalBalanceByGender.
// Змінній getTotalBalanceByGender присвоєно стрілочну функцію з параметрами (users, gender).
// У тілі функції використано ланцюжок методів у правильному порядку.
// Значення параметра users не змінюється.
// Якщо значення параметра gender — рядок "male", функція повертає число 12053.
// Якщо значення параметра gender — рядок "female", функція повертає число 8863.
// Виклик з будь-якими валідними аргументами повертає правильне значення.
// Результати всіх викликів виведено в консоль.


// Виконай задачу 4: загальний баланс

// У task-4.js оголоси стрілочну функцію getTotalBalanceByGender(users, gender).



// Вона має за допомогою ланцюжка методів повернути суму балансів користувачів заданої статі.

// Виклич метод filter() на масиві users.
// Залиш тільки об'єкти, у яких значення властивості gender збігається з параметром gender.
// До отриманого масиву одразу застосуй reduce().
// У колбеці reduce() додавай balance кожного користувача до акумулятора з початковим значенням 0.
// Поверни число, отримане всім ланцюжком.
// Додай два перевірочні виклики з ТЗ і залиш їх для ментора.


const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => {
      return user.gender === gender;
    })
    .reduce((acc, user) => {
      return acc + user.balance;
    }, 0);
};

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053
console.log(getTotalBalanceByGender(clients, "female")); // 8863
