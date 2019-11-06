// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых.
//  Вывести сумму начисленных процентов.

let money;

money = prompt("Enter money");

let yearPercent;

yearPercent = money * 5 / 100;

let amount;

amount = (yearPercent * 90) / 365;

alert(`Your gain will be ${amount}`);