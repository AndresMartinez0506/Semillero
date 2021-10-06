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

const table = document.createElement('table');
table.classList.add('tabla')
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const thUno = document.createElement('th');
const thDos = document.createElement('th');
const tbody = document.createElement('tbody')

const derecha = document.createElement('aside');
derecha.classList.add('derecha');

body.append(main);
main.append(izquierda, derecha);
izquierda.append(contenedorEncabezado, buscador, divInfo);
contenedorEncabezado.append(imgEncabezado, divLetras);
divLetras.append(titulo, directorio);
buscador.append(acceso, barraBuscar);
divInfo.append(table);
table.append(thead, tbody);
thead.append();
tr.append(thUno, thDos);

function cargarUsuarios() {
    fetch('./json/NivelesDeAceso.json')
        .then(respuesta => respuesta.json()) //formato para mostrar la info
        .then(respuesta => {
            respuesta.forEach(usuario => {
                const row = document.createElement('tr');
                row.classList.add('tr')
                row.innerHTML += `
          <td class="descripcion">${usuario.Descripcion}</td><td class="cantidad">${usuario.Cantidad}</td>
          `
                table.appendChild(row);
            });
        }) //se muestra info
}

cargarUsuarios();

// const res = await fetch('./json/NivelesDeAceso.json');
// const data = await res.json();


// let datosIzquierda = JSON.parse(localStorage.getItem('./json/NivelesDeAceso.json'))

// datosIzquierda.forEach(element => {
//     let texto = document.createElement('p');
//     texto.classList.add ('texto');
//     texto.textContent = element.Descripcion; 
//     divTabla = document.createElement('div');
//     divTabla.classList.add('divTabla');

//     let cantidad = document.createElement('p');
//     cantidad.classList.add('cantidad');
//     texto.textContent = element.Cantidad; 
// });
