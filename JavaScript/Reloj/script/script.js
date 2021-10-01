const segundero = document.querySelector(".second-hand");
const minutero = document.querySelector(".min-hand");
const horario = document.querySelector(".hour-hand");

function setday(){
const now = new Date();

const second = now.getSeconds();
const secondDegrees = ((second / 60) * 360) + 90;
segundero.style.transform = `rotate(${secondDegrees}deg)`;

const min = now.getMinutes();
const minutesDegrees = ((min / 60) * 360) + ((second / 60) * 6) + 90;
minutero.style.transform = `rotate(${minutesDegrees}deg)`;

const hours = now.getHours();
const hourDegrees = ((hours / 12) * 360) + ((min / 60) * 30) + 90;
horario.style.transform = `rotate(${hourDegrees}deg)`;
}
//setInterval(setday,1000);