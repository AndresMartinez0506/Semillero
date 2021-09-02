const secondHand = document.querySelector(".second-hand"),
hourHand = document.querySelector(".hour-hand"),
minHand = document.querySelector(".min-hand");

function setday(){
    const now = new Date(),

    second = now.getSeconds(),
    second = secondDegress = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegress}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const min = now.getMinutes(),
    minutesDegrees = ((min / 60) * 360) + ((second / 60) * 6) +90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

setday();
