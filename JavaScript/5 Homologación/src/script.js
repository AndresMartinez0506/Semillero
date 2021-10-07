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

const divInfo = document.createElement('div');
divInfo.classList.add('divInfo');

const table = document.createElement('table');
table.classList.add('tabla')
const tr = document.createElement('tr');
tr.classList.add('tr');

const derecha = document.createElement('aside');
derecha.classList.add('derecha');

const tableDerecha = document.createElement('table');
tableDerecha.classList.add('tablaAcceso');
const trDerecha = document.createElement('tr');


body.append(main);
main.append(izquierda, derecha);
izquierda.append(contenedorEncabezado, buscador, divInfo);
contenedorEncabezado.append(imgEncabezado, divLetras);
divLetras.append(titulo, directorio);
buscador.append(acceso, barraBuscar);
divInfo.append(table);
derecha.append(tableDerecha);

function cargarNiveles() {
    fetch('./json/NivelesDeAceso.json')
        .then(respuesta => respuesta.json()) //mostrar la info en json
        .then(respuesta => {
            respuesta.forEach(usuario => {
                const row = document.createElement('tr');
                row.classList.add('tr')
                row.innerHTML += `
          <td class="descripcion">${usuario.Descripcion}</td><td class="cantidad">${usuario.Cantidad}</td>
          `
          table.appendChild(row);


        });
    })
}



cargarNiveles();

function mostrarDerecha() {
    fetch('./json/AccesoTotal.json')
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            respuesta.forEach(datoDerecha => {
                const row = document.createElement('tr');
                row.classList.add('tablaDerecha')
                row.innerHTML += `
          <td class="nombreDerecha">${datoDerecha.Nombre}</td><td class="logginDerecha">${datoDerecha.Loggin}</td><td class="homologacionDerecha">${datoDerecha.Homologacion}</td>
          `
                tableDerecha.appendChild(row);
            });
        })
  
}
mostrarDerecha();

//filtro de busqueda
document.getElementById('barraBuscar').addEventListener('keyup', buscadorInterno);

function buscadorInterno(){

    filter = barraBuscar.value.toUpperCase();
    li = table.getElementsByTagName('tr');

    for ( i = 0; i < li.length; i++){

        td = li[i].getElementsByTagName('td')[0];
        textValue = td.textContent || td.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }

}
