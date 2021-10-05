const body = document.body;

const main = document.createElement('main'),

    titulo = document.createElement('h1');
titulo.innerHTML = "CONFIGURACIÓN DE RIESGOS";
titulo.classList.add('titulo');

const divInputs = document.createElement('div');
divInputs.classList.add('divInputs')

inputImpactos = document.createElement('button');
inputImpactos.id = "button";
inputImpactos.innerHTML = "IMPACTOS";

inputProbabilidades = document.createElement('button');
inputProbabilidades.id = "button";
inputProbabilidades.innerHTML = "PROBABILIDADES";

inputRiesgos = document.createElement('button');
inputRiesgos.id = "button";
inputRiesgos.innerHTML = "TIPOS DE RIESGO";

inputEvaluacion = document.createElement('button');
inputEvaluacion.id = "button";
inputEvaluacion.innerHTML = "EVALUACIÓN DE RIESGO";

const abajo = document.createElement('div');
abajo.classList.add('abajo');

const espacioTabla = document.createElement('aside');
espacioTabla.classList.add('espacioTabla');

const divEncabezado = document.createElement('div');
divEncabezado.classList.add('divEncabezado');

const pEncabezado = document.createElement('p');
pEncabezado.innerHTML = "IMPACTOS";
pEncabezado.classList.add('pEncabezado');

const botonEncabezado = document.createElement('button');
botonEncabezado.id = "botonEncabezado";
botonEncabezado.type = "submit";
botonEncabezado.innerHTML = "Nuevo";

const tabla = document.createElement('table');
tabla.classList.add('tabla');

const formulario = document.createElement('form');
formulario.classList.add('formulario');
const divAzul = document.createElement('div');
divAzul.classList.add('azul');
const equis = document.createElement('button');
equis.innerHTML = "X";
equis.classList.add('equis');

const abajoForm = document.createElement('div');
abajoForm.classList.add('abajoForm');

const divDescripcion = document.createElement('div');
divDescripcion.classList.add('divDescripcion');

const labelDescripcion = document.createElement('label');
labelDescripcion.innerHTML = "Descripción";
labelDescripcion.classList.add('labelDescripcion');

const inputDescripcion = document.createElement('input');
inputDescripcion.classList.add('inputDescripcion');
inputDescripcion.id = "inputDescripcion";
inputDescripcion.name = "inputDescripcion";
inputDescripcion.autocomplete= "off";

const divMinimo = document.createElement('div');
divMinimo.classList.add('divMinimo');

const labelValorMinimo = document.createElement('label');
labelValorMinimo.innerHTML = "Valor Mínimo";
labelValorMinimo.classList.add('labelValorMinimo');

const inputValorMinimo = document.createElement('input');
inputValorMinimo.classList.add('inputValorMinimo');
inputValorMinimo.id = "inputValorMinimo";
inputValorMinimo.name = "inputValorMinimo";
inputValorMinimo.autocomplete= "off";

const divMaximo = document.createElement('div');
divMaximo.classList.add('divMaximo');

const labelValorMaximo = document.createElement('label');
labelValorMaximo.innerHTML = "Valor Máximo";
labelValorMaximo.classList.add('labelValorMaximo');

const inputValorMaximo = document.createElement('input');
inputValorMaximo.classList.add('inputValorMaximo');
inputValorMaximo.id = "inputValorMaximo";
inputValorMaximo.name = "inputValorMaximo";
inputValorMaximo.autocomplete= "off";

const botonGuardar = document.createElement('button');
botonGuardar.id = "botonGuardar";
botonGuardar.type = "submit";
botonGuardar.innerHTML = "Guardar";

body.append(main);
main.append(titulo, abajo, formulario);
formulario.append(divAzul, abajoForm);
abajoForm.append(divDescripcion, divMinimo, divMaximo, botonGuardar);
divDescripcion.append(labelDescripcion, inputDescripcion);
divMinimo.append(labelValorMinimo, inputValorMinimo);
divMaximo.append(labelValorMaximo, inputValorMaximo);
divAzul.append(equis)
abajo.append(divInputs, espacioTabla);
espacioTabla.append(divEncabezado, tabla);
divEncabezado.append(pEncabezado, botonEncabezado)
divInputs.append(inputImpactos, inputProbabilidades, inputRiesgos, inputEvaluacion);

botonEncabezado.addEventListener("click", () => {
    formulario.style.display = "block";
});

equis.addEventListener("click", (event) => {
    formulario.style.display = "none";
    event.preventDefault();
});

botonGuardar.addEventListener("click", () => {
    formulario.style.display = "none";
});

let datosTabla = [
    {
        Código: "31",
        Descripción: "Bajo",
        Valor: "2",
    },
    {
        Código: "29",
        Descripción: "Medio",
        Valor: "4"
    },
    {
        Código: "30",
        Descripción: "Catastrófico",
        Valor: "8"
    },
];

let crearTabla = function (lista) {
    let datoTabla = "<tr><th>Código</th><th>Descripción</th><th>Valor</th><th>Acción</th></tr>";
    for (let tarea of lista) {
        let fila = "<tr> <td>";
        fila += tarea.Código;
        fila += "</td>";

        fila += "<td>";
        fila += tarea.Descripción;
        fila += "</td>";

        fila += "<td>";
        fila += tarea.Valor;
        fila += "</td>";

        fila += "<td>";
        fila += tarea.Accion;
        fila += "</td>";

        fila += "</tr>";
        datoTabla += fila;
    }
    return datoTabla;
};

document.querySelector('.tabla').innerHTML = crearTabla(datosTabla);

let lista_inputs = Array.from(document.querySelectorAll("input"));

const expresiones = {
    descripcion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    valores: /^\d{1,3}$/
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "inputDescripcion":
            if (expresiones.descripcion.test(e.target.value)) {
                document.querySelector(`#inputDescripcion`).classList.remove(`error`);
                document.querySelector(`#inputDescripcion`).classList.add(`bien`);
            } else {
                document.querySelector(`#inputDescripcion`).classList.add(`error`);
                document.querySelector(`#inputDescripcion`).classList.remove(`bien`);
            }
            break;

        case "inputValorMinimo":
            if (expresiones.valores.test(e.target.value)) {
                document.querySelector(`#inputValorMinimo`).classList.remove(`error_valores`);
                document.querySelector(`#inputValorMinimo`).classList.add(`bien_valores`);
            } else {
                document.querySelector(`#inputValorMinimo`).classList.add(`error_valores`);
                document.querySelector(`#inputValorMinimo`).classList.remove(`bien_valores`);
            }
            break;

        case "inputValorMaximo":
            if (expresiones.valores.test(e.target.value)) {
                document.querySelector(`#inputValorMaximo`).classList.remove(`error_valores`);
                document.querySelector(`#inputValorMaximo`).classList.add(`bien_valores`);
            } else {
                document.querySelector(`#inputValorMaximo`).classList.add(`error_valores`);
                document.querySelector(`#inputValorMaximo`).classList.remove(`bien_valores`);
            }
            break;
    }
}

lista_inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

