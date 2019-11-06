// Запросите у пользователя трехзначное число и выведите его задом наперед. 
// Для решения задачи вам понадобится оператор % (остаток от деления).

let number;

number = prompt("Enter number");

let first, second, third;

third = number % 10;

second = (number % 100 - third) / 10;

first = (number - (number % 100 - third) - (number % 10)) / 100;





alert(`${third}${second}${first}`)