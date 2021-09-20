import { arregloPersonas } from "./perfil.js";

const body = document.body,
    main = document.createElement('main'),

    encabezado = document.getElementById('encabezado'),
    textoArriba = document.createElement('text');
textoArriba.textContent = "Green House";
textoArriba.setAttribute("class", "textoEncabezado");

const abajo = document.createElement('div');
abajo.setAttribute("class", "abajo");

const izquierda = document.getElementById('izquierda'),
    infoPerfil = document.createElement('section');

//se crea foreach para recorrer cada objeto del arreglo //JavaScript Object Notation
arregloPersonas.forEach(persona => {
    // document.getElementById('izquierda').innerHTML = "";
    const arribaPerfil = document.createElement('aside'),
        imagen = document.createElement('img'),
        nombre = document.createElement('h1'),
        edad = document.createElement('b'),
        profesion = document.createElement('span'),
        aficiones = document.createElement('span'),
        ciudad = document.createElement('span'),
        casado = document.createElement('span');

    imagen.src = persona.Imagen;
    nombre.innerText = persona.Nombre;
    edad.innerText = persona.Edad;
    profesion.innerText = persona.Profesión;
    aficiones.innerText = persona.Aficiones;
    ciudad.innerText = persona.Ciudad;
    casado.innerText = persona.Casado;

    izquierda.appendChild(arribaPerfil);

    arribaPerfil.append(imagen, nombre, edad, profesion, aficiones, ciudad, casado);

});
//

const derecha = document.getElementById('derecha'),
    tituloDerecha = document.createElement('h1'),
    divEstado = document.createElement('div');
divEstado.classList.add("divEstado");
const tituloEstado = document.createElement('h2'),
    input = document.getElementById("input"),
    boton = document.getElementById("boton"),
    tabla = document.getElementById("tabla");

function borrar(event) {
    this.event.target.parentElement.parentElement.remove()
};

function agregarEstado() {
    const estado = document.createElement("tr");
    estado.innerHTML = `<td> <input type="checkbox" /> </td>
    <td style="flex-grow"> ${input.value} </td>
    <td><span click=borrar()"> X </span></td>`;

    tabla.appendChild(estado);

}

boton.addEventListener('click', function (e) {
    if (input.value === "") {
        validacion("¡No  has escrito nada!")
    } else {
        agregarEstado();
        validacion("Estado publicado")
    }
});


function validacion(mensaje, clase) {
    const div = document.createElement('div');
    div.className = clase;
    div.appendChild(document.createTextNode(mensaje));

    const titulo = document.querySelector('h1');
    titulo.insertBefore(div, null);

    setTimeout(function () {
        document.querySelector(`.${clase}`).remove();
    }, 1500)
}

body.append(main);
main.append(encabezado, abajo, izquierda, derecha);
encabezado.append(textoArriba);
abajo.append(izquierda, derecha);
izquierda.append(infoPerfil);
derecha.append(tituloDerecha, divEstado);
divEstado.append(tituloEstado, input, boton, tabla);