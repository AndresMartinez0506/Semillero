const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setday(){
    const now = new Date();

    const second = now.getSeconds();
    const secondDegress = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegress}deg)`;

    const min = now.getMinutes();
    const minutesDegrees = ((min / 60) * 360) + ((second / 60) * 6) +90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((min / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setday();

function actualizar(){location.reload(true);}
setInterval("actualizar()",1000);