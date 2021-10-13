const body = document.body;
const main = document.querySelector('#main');

const imgFondo = document.createElement('img');
imgFondo.src = "/Imagenes/fondo.svg";
imgFondo.classList.add('imgFondo');

const contenedorBuscar = document.createElement('div');
contenedorBuscar.classList.add('contenedorBuscar');
const encabezadoFiltro = document.createElement('header');
encabezadoFiltro.classList.add('encabezadoFiltro');
const tituloBuscar = document.createElement('h4');
tituloBuscar.innerHTML = "Buscar órdenes de facturación";

const cajaContenedores = document.createElement('div');
const contenedorUno = document.createElement('div');
contenedorUno.classList.add('contenedorUno');

const contenedorFechaInicial = document.createElement('div');
contenedorFechaInicial.classList.add('contenedorFechaInicial');
const imgCalendario = document.createElement('img');
imgCalendario.classList.add('imgCalendarioFinal');
imgCalendario.src = "/Imagenes/calendario.svg";

const sectionInfoFecha = document.createElement('section');
sectionInfoFecha.classList.add('sectionInfoFecha');
const tituloFecha = document.createElement('p');
tituloFecha.innerHTML = "Fecha inicial";

const inputFechaInicial = document.createElement('input');
inputFechaInicial.classList.add('inputFechaInicial');
inputFechaInicial.type = "date";

const contenedorFechaFinal = document.createElement('div');
contenedorFechaFinal.classList.add('contenedorFechaFinal');
const imgCalendarioFinal = document.createElement('img');
imgCalendarioFinal.src = "/Imagenes/calendario.svg";
imgCalendarioFinal.classList.add('imgCalendarioFinal');

const sectionInfoFechaFinal = document.createElement('section');
sectionInfoFechaFinal.classList.add('sectionInfoFechaFinal');
const tituloFechaFinal = document.createElement('p');
tituloFechaFinal.innerHTML = "Fecha final";

const inputFechaFinal = document.createElement('input');
inputFechaFinal.classList.add('inputFechaFinal');
inputFechaFinal.type = "date";

const divAbajo = document.createElement('div');
divAbajo.classList.add('divAbajo');

const contenedorDos = document.createElement('div');
contenedorDos.classList.add('contenedorDos');

const contenedorOrdenFacturacion = document.createElement('div');
contenedorOrdenFacturacion.classList.add('contenedorOrdenFacturacion');
const imgFacturacion = document.createElement('img');
imgFacturacion.src = "/Imagenes/icono_orden_de_facturacion.svg";
imgFacturacion.classList.add('imgCalendarioFinal');

const sectionOrdenFacturacion = document.createElement('section');
sectionOrdenFacturacion.classList.add('sectionOrdenFacturacion');
const tituloFacturacion = document.createElement('p');
tituloFacturacion.innerHTML = "Orden de facturación";

const inputFacturacion = document.createElement('input');
inputFacturacion.classList.add('inputFacturacion');
inputFacturacion.placeholder = "Número de orden de facturación";

const contenedorCliente = document.createElement('div');
contenedorCliente.classList.add('contenedorCliente');
const imgCliente = document.createElement('img');
imgCliente.src = "/Imagenes/icono_cliente.svg";
imgCliente.classList.add('imgCliente');

const sectionCliente = document.createElement('section');
sectionCliente.classList.add('sectionCliente');
const tituloCliente = document.createElement('p');
tituloCliente.innerHTML = "Cliente";

const inputCliente = document.createElement('input');
inputCliente.classList.add('inputCliente');
inputCliente.placeholder = "Buscar el cliente";

const contenedorModeloNegocio = document.createElement('div');
contenedorModeloNegocio.classList.add('contenedorModeloNegocio');
const imgNegocio = document.createElement('img');
imgNegocio.src = "/Imagenes/icono_negocio.svg";
imgNegocio.classList.add('imgNegocio');

const sectionNegocio = document.createElement('section');
sectionNegocio.classList.add('sectionNegocio');
const tituloNegocio = document.createElement('p');
tituloNegocio.innerHTML = "Modelo de negocio";

const inputNegocio = document.createElement('input');
inputNegocio.classList.add('inputNegocio');
inputNegocio.placeholder = "Buscar el modelo de negocio";

const contenedorMoneda = document.createElement('div');
contenedorMoneda.classList.add('contenedorMoneda');
const imgMoneda = document.createElement('img');
imgMoneda.src = "/Imagenes/icono_moneda.svg";
imgMoneda.classList.add('imgMoneda');

const sectionMoneda = document.createElement('section');
sectionMoneda.classList.add('sectionMoneda');
const tituloMoneda = document.createElement('p');
tituloMoneda.innerHTML = "Moneda";

const selectMoneda = document.createElement('select');
selectMoneda.classList.add('selectMoneda');

const botonConsultar = document.createElement('button');
botonConsultar.id = "botonConsultar";
botonConsultar.src = "/Imagenes/icono_consultar.svg";
botonConsultar.innerHTML = "Consultar";

const loader = document.createElement('div');
loader.classList.add('loader-container');

const loaderUno = document.createElement('div');
loaderUno.classList.add('loader');

const loaderDos = document.createElement('div');
loaderDos.classList.add('loader2');


body.append(main);
main.append(contenedorBuscar, imgFondo, loader);
contenedorBuscar.append(encabezadoFiltro, cajaContenedores);
cajaContenedores.append(contenedorUno, divAbajo);
divAbajo.append(contenedorDos, botonConsultar);
contenedorUno.append(contenedorFechaInicial, contenedorFechaFinal);
contenedorFechaInicial.append(imgCalendario, sectionInfoFecha);
contenedorFechaFinal.append(imgCalendarioFinal, sectionInfoFechaFinal);
sectionInfoFecha.append(tituloFecha, inputFechaInicial);
sectionInfoFechaFinal.append(tituloFechaFinal, inputFechaFinal);
encabezadoFiltro.append(tituloBuscar);
contenedorDos.append(contenedorOrdenFacturacion, contenedorCliente, contenedorModeloNegocio, contenedorMoneda);
contenedorOrdenFacturacion.append(imgFacturacion, sectionOrdenFacturacion);
sectionOrdenFacturacion.append(tituloFacturacion, inputFacturacion);
contenedorCliente.append(imgCliente, sectionCliente);
sectionCliente.append(tituloCliente, inputCliente);
contenedorModeloNegocio.append(imgNegocio, sectionNegocio);
sectionNegocio.append(tituloNegocio, inputNegocio);
contenedorMoneda.append(imgMoneda, sectionMoneda);
sectionMoneda.append(tituloMoneda, selectMoneda)
loader.append(loaderUno, loaderDos);


encabezadoFiltro.addEventListener('click', () => {
    main.classList.toggle('cambio')
    cajaContenedores.classList.toggle('ocultar');
    contenedorBuscar.classList.toggle('achicar');
    imgFondo.classList.toggle('ocultar')
});

const lista_inputs = Array.from(document.querySelectorAll("input"));

const expresiones = {
    dato: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}

const validarFormulario = (e) => {
    switch (e.target.value) {
        case "inputFacturacion":
            if (expresiones.dato.test(e.target.value)) {
                document.querySelector('.inputFacturacion').classList.remove('error');
                document.querySelector('inputFacturacion').classList.add('bien');
                console.log('bien');
            } else {
                document.querySelector('.inputFacturacion').classList.add('error');
                document.querySelector('.inputFacturacion').classList.remove('bien');
                console.log('mal');
            }

            break;

        case "inputNegocio":
            if (expresiones.dato.test(e.target.value)) {
                document.querySelector('.inputNegocio').classList.remove('error');
                document.querySelector('.inputNegocio').classList.add('bien');
            } else {
                document.querySelector('.inputNegocio').classList.add('error');
                document.querySelector('.inputNegocio').classList.remove('bien');
            }
            break;
    }
}

lista_inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

botonConsultar.addEventListener('click', () => {
    loader.style.display = "block"
})


fetch('./json/monedas.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        respuesta.forEach(moneda => {
            let option = document.createElement('option');
            selectMoneda.append(option)
            option.innerHTML += `
          ${moneda.descripcion}-${moneda.abreviatura}
          `
        })
    });