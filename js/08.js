// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
// Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

let money, price;

money = prompt("Enter money");

price = prompt("Enter price");

let buy;

buy = Math.trunc(money / price);

// let differance;

// differance = buy * price;

let balance;

balance = Math.trunc(money - (buy * price));

alert(` You can buy ${buy} and after your balance will be ${balance}`);