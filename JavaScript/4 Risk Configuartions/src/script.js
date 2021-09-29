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
botonEncabezado.innerHTML = "Nuevo"

body.append(main);
main.append(titulo, abajo);
abajo.append(divInputs, tabla);
tabla.append(divEncabezado);
divEncabezado.append(pEncabezado, botonEncabezado)
divInputs.append(inputImpactos, inputProbabilidades, inputRiesgos, inputEvaluacion);