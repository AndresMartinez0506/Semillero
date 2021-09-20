const body = document.body,
main = document.createElement('main'),

flex = document.getElementById('flex'),

izquierda = document.getElementById('izquierda');
const imagen = document.createElement('img');
imagen.src = "./Imagenes/team.jpg";

const derecha = document.getElementById('derecha');
const titulo = document.createElement('h1');
const formulario = document.getElementById('formulario');
const nombre = document.createElement('input'),
compañia = document.createElement('input'),
descripcion= document.createElement('input'),
celular = document.createElement('input'),
correo = document.createElement('input'),
boton = document.createElement('button');

titulo.textContent = "Ayuda remota";

formulario.classList.add('contenedor_formulario');
formulario.name = "formulario";
formulario.id = "formulario";

nombre.classList.add("input");
nombre.type = "text";
nombre.id = "nombre";
nombre.name = "nombre";
nombre.placeholder = "Nombre y  apellido";
nombre.required = "required";

compañia.classList.add("input");
compañia.type = "text";
compañia.id = "compañia";
compañia.name = "compañia";
compañia.placeholder = "NIT o nombre de la compañía";
compañia.required = "required";

descripcion.classList.add("input");
descripcion.type = "text";
descripcion.id = "descripcion";
descripcion.name = "descripcion";
descripcion.placeholder = "Breve descripción del inconveniente";
descripcion.required = "required";

celular.classList.add("input");
celular.type = "number";
celular.id = "celular";
celular.name = "celular";
celular.placeholder = "Teléfono o celular";
celular.required = "required";

correo.classList.add("input");
correo.type = "email";
correo.id = "correo";
correo.name = "correo";
correo.placeholder = "Correo electrónico";
correo.required = "required";

boton.classList.add("boton");
boton.type = "submit";
boton.innerText = "Solicitar sesión";

check = document.createElement('input');
check.classList.add('check');
check.type = "checkbox";


const TyC = document.createElement('tyc');
TyC.innerHTML = `</td><p>"Al enviar este formulario,autorizo el servicio de software
TeamViewer para realizar el acceso remoto, autorizo realizar cambios en el equipo los cuales incluyen puntos de 
restauración del sistema operativo , manifiesto que conozco la <b>política de protección de datos</b>" autorizo de 
manera voluntaria , previa, expresa e inequívoca a SINCOSOFT S.A.S., para tratar mis datos personales y de carácter 
sensible (en caso de ser necesaria su recolección), de acuerdo con las políticas de tratamiento de datos personales 
de la empresa y para los fines relacionados con su objeto social y especial para fines legales,contractuales y comerciales 
de SINCOSOFT S.A.S. De igual manera, acepto los " <b>términos condiciones</b>" establecidos por SINCOSOFT S.A.S." ""</p>`;
TyC.classList.add('tyc');


const pie = document.getElementById('pie');
pie.classList.add('pie');
const datos = document.createElement('text');
datos.textContent = `"PBX: (571) 5 190 345 - Cr. 12 # 79 - 50 - Bogotá, D.C., Colombia. - Copyright 2016. SINCOSOFT S.A.S. 
Todos los derechos reservados."`;

body.append(main);
main.append(flex, pie);
flex.append(izquierda, derecha)
izquierda.append(imagen);
derecha.append(titulo, formulario, check, TyC, boton);
formulario.append(nombre, compañia, descripcion, celular, correo);
pie.append(datos);