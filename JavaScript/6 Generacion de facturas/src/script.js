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

const divArriba = document.createElement('div');
divArriba.classList.add('divArriba');

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

const botonFiltrar = document.createElement('button');
botonFiltrar.id = "botonFiltrar";
botonFiltrar.innerHTML = "Filtrar";

const botonGenerar = document.createElement('button');
botonGenerar.id = "botonGenerar";
botonGenerar.innerHTML = "Generar";

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
inputFacturacion.id = "numeros";
inputFacturacion.type = "text";

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
inputCliente.id = "letras";
inputCliente.type = "text";

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
inputNegocio.id = "letras";
inputNegocio.type = "text";

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
cajaContenedores.append(divArriba, divAbajo);
divArriba.append(contenedorUno, botonFiltrar, botonGenerar);
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

const lista_inputsLetras = Array.from(document.querySelectorAll("#letras"));

const expresiones = {
    letra: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    factura: /^\d{3,5}$/
}

lista_inputsLetras.forEach((input) => {
    input.addEventListener('keyup', () => {
        if (expresiones.letra.test(input.value)) {
            input.classList.remove('error');
            input.classList.add('bien');
            console.log("bien")

        } else {
            input.classList.add('error');
            input.classList.remove('bien');
            console.log("mal");

        }
    });
    input.addEventListener('blur', () => {
        if (expresiones.letra.test(input.value)) {
            input.classList.remove('error');
            input.classList.add('bien');
            console.log("bien")

        } else {
            input.classList.add('error');
            input.classList.remove('bien');
            console.log("mal");
        }
    });
});

inputFacturacion.addEventListener('keyup', () => {
    if (expresiones.factura.test(inputFacturacion.value)) {
        inputFacturacion.classList.remove('error');
        inputFacturacion.classList.add('bien');
        console.log("bien")

    } else {
        inputFacturacion.classList.add('error');
        inputFacturacion.classList.remove('bien');
        console.log("mal");

    }
});
inputFacturacion.addEventListener('blur', () => {
    if (expresiones.factura.test(inputFacturacion.value)) {
        inputFacturacion.classList.remove('error');
        inputFacturacion.classList.add('bien');
        console.log("bien")

    } else {
        inputFacturacion.classList.add('error');
        inputFacturacion.classList.remove('bien');
        console.log("mal");
    }
});

botonConsultar.addEventListener('click', () => {
    loader.style.display = "block";
    body.style.opacity = "50%";
    setTimeout(() => {
        loader.style.display = "none";
        imgFondo.style.display = "none";
        main.style.height = "100%";
        body.style.opacity = "100%";
        divAbajo.style.display = "none";
        contenedorBuscar.style.height = "200px";
        botonFiltrar.style.display = "block";
        botonGenerar.style.display = "block";
        tabla.style.display = "block";
    }, 400);

});

botonFiltrar.addEventListener('click', () => {
    loader.style.display = "block";
    body.style.opacity = "50%";
    setTimeout(() => {
        loader.style.display = "none";
        imgFondo.style.display = "block";
        main.style.height = "100%";
        body.style.opacity = "100%";
        divAbajo.style.display = "block";
        contenedorBuscar.style.height = "100%";
        botonFiltrar.style.display = "none";
        botonGenerar.style.display = "none";
        tabla.style.display = "none";
    }, 400);
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

const tabla = document.createElement('table');

function cargarFiltro() {
    fetch('./json/filtro.json')
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            tabla.innerHTML = ` 
                                <th>Ver</th>
                                <th>Ordenes de facturación</th>
                                <th>Fecha de registro</th>
                                <th>Nombre del cliente</th>
                                <th>Forma de pago</th>
                                <th>Forma de negocio</th>
                                <th>Fecha de vencimiento</th>
                                <th>Valor total a cobrar</th>
                                <th>Valor anticipo</th>
                                <th>Asociar anticipo</th>
                                `
            respuesta.forEach(filtro => {
                tabla.classList.add('tabla');
                main.append(tabla);
                tabla.innerHTML += `
            <td class="documentos"><div class="botonDocumentoVerde"><img src="./Imagenes/documento_verde.svg"><img src="./Imagenes/adobe_verde.svg"></div></td>
            <td>${filtro.codigoOrdenDeFacturacion}</td>
            <td>${filtro.fechaRegistro}</td>
            <td class="cliente">${filtro.clienteNombre}</td>
            <td>${filtro.formaPago}</td>
            <td>${filtro.modeloNegocio}</td>
            <td>${filtro.fechaVencimiento}</td>
            <td>${filtro.valorTotalACobrar}</td>
            <td>${filtro.valorAnticipo}</td>
            <td>${filtro.asociarAnticipo}</td>
            <td class="imgChecked"><div></div></td>

            `

            })
        })
};
cargarFiltro();


inputCliente.addEventListener('keyup', buscarClientes);

function buscarClientes() {

    filtro = inputCliente.value.toUpperCase();
    li = tabla.querySelectorAll('tbody');

    for (i = 0; i < li.length; i++) {

        textValue = li[i].querySelectorAll('tr')[0].innerText;

        if (textValue === filtro > -1) {

            li[i].style.display = "";
            console.log("se encontro")

        } else {
            li[i].style.display = "none";
            console.log("no se encontro")

        }
    }
}

const divGenerado = document.createElement('div');
const barraAzul = document.createElement('div');
const tituloBarraAzul = document.createElement('div');
tituloBarraAzul.innerHTML = "Órdenes de facturación procesadas";
tituloBarraAzul.classList.add('tituloBarraAzul')
const equis = document.createElement('button');
divGenerado.classList.add('divGenerado');
barraAzul.classList.add('barraAzul');
equis.classList.add('equis');
equis.innerHTML = "X"
divGenerado.style.display = "none";
main.append(divGenerado);
divGenerado.append(barraAzul);
barraAzul.append(tituloBarraAzul,equis);

equis.addEventListener('click',()=>{
    divGenerado.style.display = "none"
})

botonGenerar.addEventListener('click', () => {
    body.style.opacity = "50%";
    loader.style.display = "block";
    setTimeout(() => {
        body.style.opacity = "100%";
        loader.style.display = "none";
        divGenerado.style.display = "block";
    }, 400);
})

let checks = Array.from(document.querySelectorAll('.checkbox'))

checks.map((check) => {

    check.addEventListener('click', () => {

        check.classList.add('imgChecked');

    })

});