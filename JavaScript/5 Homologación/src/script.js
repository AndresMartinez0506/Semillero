const body = document.body;

const main = document.createElement('main');

const izquierda = document.createElement('aside');
izquierda.classList.add('izquierda');
const contenedorEncabezado = document.createElement('div');
contenedorEncabezado.classList.add('contenedorEncabezado');
const imgEncabezado = document.createElement('img');
imgEncabezado.src = "./assets/DA.svg";
imgEncabezado.classList.add('imgEncabezado');
const divLetras = document.createElement('div');
divLetras.classList.add('divLetras');
const titulo = document.createElement('h1');
titulo.innerHTML = "Homologación";
titulo.classList.add('titulo');
const directorio = document.createElement('h4');
directorio.innerHTML = "Directorio Activo";
directorio.classList.add('directorio');

const buscador = document.createElement('div');
const acceso = document.createElement('h2');
acceso.innerHTML = "Nivel acceso";
acceso.classList.add('acceso');

const barraBuscar = document.createElement('input');
barraBuscar.id = "barraBuscar";
barraBuscar.placeholder = "Buscar";
barraBuscar.autocomplete = "off";

const divInfo = document.createElement('div');
divInfo.classList.add('divInfo');

const divSeleccionar = document.createElement('div');
divSeleccionar.classList.add('divSeleccionar');
// const botonBolivar = document.createElement('button');
// botonBolivar.innerHTML = "Acceso Total Bolivar";
// botonBolivar.classList.add('botonSeleccionar');

// const botonContable = document.createElement('button');
// botonContable.innerHTML = "Analista Contable 1";
// botonContable.classList.add('botonSeleccionar');

// const botonClientes = document.createElement('button');
// botonClientes.innerHTML = "Analista Contable Clientes";
// botonClientes.classList.add('botonSeleccionar');

// const botonNomina = document.createElement('button');
// botonNomina.innerHTML = "Analista de Nomina";
// botonNomina.classList.add('botonSeleccionar');

// const botonNominayDirectora = document.createElement('button');
// botonNominayDirectora.innerHTML = "Analista de Nomina y Directora de Contabilidad";
// botonNominayDirectora.classList.add('botonSeleccionar');

// const botonAsesor = document.createElement('button');
// botonAsesor.innerHTML = "Asesor Comercial";
// botonAsesor.classList.add('botonSeleccionar');

// const botonConRegistro = document.createElement('button');
// botonConRegistro.innerHTML = "Asesor Comercial con registro de visitas";
// botonConRegistro.classList.add('botonSeleccionar');

// const botonTramites = document.createElement('button');
// botonTramites.innerHTML = "Asesor de tramites";
// botonTramites.classList.add('botonSeleccionar');

// const botonTramites2 = document.createElement('button');
// botonTramites2.innerHTML = "Asesor de tramites empresariales";
// botonTramites2.classList.add('botonSeleccionar');

// const botonAccionista = document.createElement('button');
// botonAccionista.innerHTML = "Accionista de bienes raices";
// botonAccionista.classList.add('botonSeleccionar');

// const botonBussines = document.createElement('button');
// botonBussines.innerHTML = "Bussines Manager";
// botonBussines.classList.add('botonSeleccionar');

const derecha = document.createElement('aside');
derecha.classList.add('derecha');


body.append(main);
main.append(izquierda, derecha);
izquierda.append(contenedorEncabezado, buscador, divInfo);
contenedorEncabezado.append(imgEncabezado, divLetras);
divLetras.append(titulo, directorio);
buscador.append(acceso, barraBuscar);
divInfo.append(divSeleccionar);
// divSeleccionar.append(botonBolivar, botonContable, botonClientes, botonNomina,
//     botonNominayDirectora, botonAsesor, botonConRegistro, botonTramites, botonTramites2, botonAccionista, botonBussines);

document.getElementById('cargar').addEventListener('click', cargarLista);

function cargarLista(){
    fetch('NivelesDeAceso.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(niveles) {
            html += `
                <li>${niveles.Descripcion} ${niveles.Cantidad}</li>
                `
        });

            document.getElementsByClassName('divSeleccionar').innerHTML = html;
    })
}