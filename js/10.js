// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых.
//  Вывести сумму начисленных процентов.

let money;

money = prompt("Enter money");

const percent = 5 / 12;

let amount;

amount = ((money * percent) / 100) * 2;

alert(`Your gain will be ${amount}`)