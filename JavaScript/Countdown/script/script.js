const inicioMinutos = 10;
let tiempo = inicioMinutos * 60;

const cuenta = document.getElementById('contador');

setInterval (calculoContador, 1000);

function calculoContador(){
    const minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    cuenta.innerText = `${minutos}: ${segundos}`;
    tiempo--
}