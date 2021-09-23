const body = document.body,
main = document.querySelector('main');

const header = document.getElementById('header');

const titulo = document.createElement('h1');
titulo.innerHTML = "Subir extracto bancario";
titulo.classList.add('titulo');

const linea = document.createElement('div');
linea.classList.add('linea');

const abajoLinea = document.createElement('aside');
abajoLinea.classList.add('abajoLinea');

const demo = document.createElement('h4');
demo.innerHTML = "DEMO SAS   NIT 85,133,458-9";
demo.classList.add('demo');

const fecha = document.createElement('h4');
fecha.innerHTML = "Fecha: 16/09/2021 10:54:34 a.m.";
fecha.classList.add('fecha');

const formulario = document.getElementById('formulario');

const izquerda = document.getElementById('izquierda');

const derecha =  document.getElementById('derecha');





body.append(main);
main.append(header, formulario);
header.append(titulo, linea, abajoLinea);
abajoLinea.append(demo, fecha);
formulario.append(izquerda, derecha);