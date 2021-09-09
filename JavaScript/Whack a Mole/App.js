const agujeros = document.querySelectorAll('.agujero');
const tableroPuntos = document.querySelector('#tableroPuntos');
const topos = document.querySelectorAll('.topo');
const dificultad = document.querySelector('#desplegableDificultad');

let ultimoAgujero;
let tiempoFinalizado = false;
let puntaje;

function CalcularTiempoAleatorio(minimo, maximo){
    return Math.round(Math.random() * (maximo - minimo) * minimo);
}

function CalcularAgujeroAleatorio(agujeros){
    const ubicacion = Math.floor(Math.random() * agujeros.length);
    const agujeroExtraido = agujeros[ubicacion];

    if(agujeroExtraido === ultimoAgujero){
        return CalcularAgujeroAleatorio(agujeros);
    }

    ultimoAgujero = agujeroExtraido;
    return agujeroExtraido;
}

function Ejecutar(){
    let tiempoJuego; 
    
    switch(dificultad.value){
        case "1":
            tiempoJuego = CalcularTiempoAleatorio(1000, 2500);
            break;

        case "2":
            tiempoJuego = CalcularTiempoAleatorio(500, 1000);
            break;

        case "3":
            tiempoJuego = CalcularTiempoAleatorio(400, 600);
            break;
    
        case "4":
            tiempoJuego = CalcularTiempoAleatorio(200, 500);
            break;

        default:
            tiempoJuego = CalcularTiempoAleatorio(500, 1000);
    }
    const agujero = CalcularAgujeroAleatorio(agujeros);
    agujero.classList.add('up');

    setTimeout(() => {
        agujero.classList.remove('up');
        if(!tiempoFinalizado) Ejecutar();
    }, tiempoJuego)
}

function IniciarJuego(){
    tableroPuntos.textContent = 0;
    puntaje = 0;
    tiempoFinalizado = false;
    Ejecutar();
    setTimeout(() => tiempoFinalizado = true, 10000);
}

function CalcularGolpes(e){
    if(!e.isTrusted) return;
    puntaje++;
    this.parentNode.classList.remove('up');
    tableroPuntos.textContent = puntaje;
}

topos.forEach(topo => topo.addEventListener('click', CalcularGolpes));