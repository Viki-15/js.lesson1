// Пользователь указывает объем флешки в Гб. 
// Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

let size;

size = prompt("enter size of your device");

const file = 820;

let quantity;

quantity = Math.trunc((size * 1024) / file);

alert(`you can have ${quantity}`);