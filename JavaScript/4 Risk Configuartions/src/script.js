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

body.append(main);
main.append(titulo, divInputs);
divInputs.append(inputImpactos, inputProbabilidades, inputRiesgos, inputEvaluacion)