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

const tabla = document.createElement('aside');
tabla.classList.add('tabla');

const divEncabezado = document.createElement('div');
divEncabezado.classList.add('divEncabezado');

const pEncabezado = document.createElement('p');
pEncabezado.innerHTML = "IMPACTOS";
pEncabezado.classList.add('pEncabezado');

const botonEncabezado = document.createElement('button');
botonEncabezado.id = "botonEncabezado";
botonEncabezado.type = "submit";
botonEncabezado.innerHTML = "Nuevo";

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

const divMinimo = document.createElement('div');
divMinimo.classList.add('divMinimo');

const labelValorMinimo = document.createElement('label');
labelValorMinimo.innerHTML = "Valor Mínimo";
labelValorMinimo.classList.add('labelValorMinimo');

const inputValorMinimo = document.createElement('input');
inputValorMinimo.classList.add('inputValorMinimo');

const divMaximo = document.createElement('div');
divMaximo.classList.add('divMaximo');

const labelValorMaximo = document.createElement('label');
labelValorMaximo.innerHTML = "Valor Máximo";
labelValorMaximo.classList.add('labelValorMaximo');

const inputValorMaximo = document.createElement('input');
inputValorMaximo.classList.add('inputValorMaximo');

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
abajo.append(divInputs, tabla);
tabla.append(divEncabezado);
divEncabezado.append(pEncabezado, botonEncabezado)
divInputs.append(inputImpactos, inputProbabilidades, inputRiesgos, inputEvaluacion);

botonEncabezado.addEventListener("click", ()=> {
    formulario.style.display = "block";
});

equis.addEventListener("click", ()=> {
    formulario.style.display = "none";
})
