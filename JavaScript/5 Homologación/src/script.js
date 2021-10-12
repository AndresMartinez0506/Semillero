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
table.classList.add('tabla');

const derecha = document.createElement('aside');
derecha.classList.add('derecha');

const imgDerecha = document.createElement('img');
imgDerecha.classList.add('imgDerecha');
imgDerecha.src = "./assets/Background.svg";

const tablaAcceso = document.createElement('table');
tablaAcceso.classList.add('tablaAcceso');

const tablaCoordinadora = document.createElement('table');
tablaCoordinadora.classList.add('tablaAcceso');

const divimgCheck = document.createElement('div');
divimgCheck.classList.add('botonCheck');

const botonCheck = document.createElement('img');
botonCheck.src = "./assets/agregar.svg";
botonCheck.style.display = "none";

const divimgQuita = document.createElement('div');
divimgQuita.classList.add('botonQuita');

const botonQuita = document.createElement('img');
botonQuita.src = "./assets/desmarca.svg";
botonQuita.style.display = "none";


body.append(main);
main.append(izquierda, derecha);
izquierda.append(contenedorEncabezado, buscador, divInfo);
contenedorEncabezado.append(imgEncabezado, divLetras);
divLetras.append(titulo, directorio);
buscador.append(acceso, barraBuscar);
divInfo.append(table);
derecha.append(imgDerecha, tablaAcceso, tablaCoordinadora, divimgCheck, divimgQuita);
divimgCheck.append(botonCheck);
divimgQuita.append(botonQuita);

function cargarNiveles() {
    fetch('./json/NivelesDeAceso.json')
        .then(respuesta => respuesta.json()) //mostrar la info en json
        .then(respuesta => {
            respuesta.forEach(usuario => {
                let tr = document.createElement('tr');
                table.append(tr)
                tr.innerHTML += `

          <td class="descripcion">${usuario.Descripcion}</td><td class="cantidad">${usuario.Cantidad}</td>
          `

                tr.addEventListener('click', () => {
                    if (usuario.Descripcion === "Acceso Total - Descripción") {
                        mostrarTablaAcceso();
                    } else if (usuario.Descripcion === "Coordinadora de Calidad") {
                        mostrarTablaCoordinadora();
                    }
                })
            });
        })
}

cargarNiveles();

//filtro de busqueda
document.getElementById('barraBuscar').addEventListener('keyup', buscadorInterno);

function buscadorInterno() {

    filtro = barraBuscar.value.toUpperCase();
    li = table.getElementsByTagName('tr');

    for (i = 0; i < li.length; i++) {

        td = li[i].getElementsByTagName('td')[0];
        textValue = td.textContent || td.innerText;

        if (textValue.toUpperCase().indexOf(filtro) > -1) {

            li[i].style.display = "";

        } else {
            li[i].style.display = "none";

        }
    }
}
//tabla acceso total
function llenarTotal() {
    localStorage.setItem('accesoTotal', fetch('./json/AccesoTotal.json').then(total => total.json()).then(total => {
        total.forEach(acceso => {
            let marcar = acceso.Homologacion == null ? "" : "checked";
            let marcarDos = acceso.Homologacion == null ? "" : "Homologado";

            tablaAcceso.innerHTML += `
            <tr>
            <td><input type = "checkbox" class="check" id="${acceso.Id}" ${marcar}></td>
            <td class="nombre">${acceso.Nombre}</td>
             <td class="loggin">${acceso.Loggin}</td>
             <td class="homo">${marcarDos}</td>
             </tr>
  `
        });
        let nombre = Array.from(document.querySelectorAll('.check'));

        divimgCheck.addEventListener('click', () =>
            todosMarcados(true, nombre)
        );

        divimgQuita.addEventListener('click', () =>
            todosMarcados(false, nombre)
        )
    })
    )
};

tablaAcceso.style.display = "none"
llenarTotal();


function todosMarcados(caja, nombre) {

    nombre.map((chulo) => {
        chulo.checked = caja;
    })
}


//tabla coordinadora
function llenarCoordinadora() {
    localStorage.setItem('accesoTotal', fetch('./json/CoordinadoraDeCalidad.json').then(coordinadora => coordinadora.json()).then(coordinadora => {
        coordinadora.forEach(coor => {
            let marcar = acceso.Homologacion == null ? "" : "checked";
            let marcarDos = acceso.Homologacion == null ? "" : "Homologado";
            tablaCoordinadora.innerHTML += `
            <tr class="coordina">
            <td><input type = "checkbox" class="check" id="${coor.Id}" ${marcar}></td>
 <td class="nombre">${coor.Nombre}</td>
 <td class="loggin">${coor.Loggin}</td>
 <td class="homo">${coor.Homologacion}</td>
 </tr>
  `
        });
        let nombre = Array.from(document.querySelectorAll('.check'));

        divimgCheck.addEventListener('click', () =>
            todosMarcados(true, nombre)
        );

        divimgQuita.addEventListener('click', () =>
            todosMarcados(false, nombre)
        )
    })
    )

};

tablaCoordinadora.style.display = "none"

llenarCoordinadora();

function mostrarTablaAcceso() {
    tablaCoordinadora.style.display = "none";
    tablaAcceso.style.display = "block"
    imgDerecha.style.display = "none";
    botonCheck.style.display = "block"
    botonQuita.style.display = "block";
}

function mostrarTablaCoordinadora() {
    tablaCoordinadora.style.display = "block";
    tablaAcceso.style.display = "none";
    imgDerecha.style.display = "none";
    botonCheck.style.display = "block"
    botonQuita.style.display = "block";
}