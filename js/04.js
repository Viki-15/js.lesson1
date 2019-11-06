// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

let radius;

radius = prompt("Enter radius");

let area;

const p = 3.1415;

area = p * (Math.pow(radius, 2));

alert(`area = ${area}`);