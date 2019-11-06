// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. 
// Текущий год укажите в коде как константу.

let year, age;

year = prompt("Enter your year of birth");

const yearNow = 2019;

age = yearNow - year;

alert(`Your age now ${age}`);