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

const buscador =  document.createElement('div');
const acceso = document.createElement('h2');
const barraBuscar = document.createElement('input');
barraBuscar.id = "barraBuscar";
barraBuscar.placeholder = "Buscar";
barraBuscar.autocomplete = "off";





body.append(main);
main.append(izquierda);
izquierda.append(contenedorEncabezado, buscador);
contenedorEncabezado.append(imgEncabezado, divLetras);
divLetras.append(titulo, directorio);
buscador.append(acceso, barraBuscar)