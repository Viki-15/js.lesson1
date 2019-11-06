// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

let distsnce, time, speed;

distsnce = prompt("Enter distance");

let time;

time = prompt("Enter time");

let speed;

speed = distsnce / time;

alert(`Your speed must be ${speed}`);