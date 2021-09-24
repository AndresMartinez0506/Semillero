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

const labelArchivos = document.createElement('p');
labelArchivos.innerHTML = "Archivo a procesar";

const labelCeros = document.createElement('p');
labelCeros.innerHTML = "Archivo en ceros";

const labelMes = document.createElement('p');
labelMes.innerHTML = "Mes";

const labelBanco = document.createElement('p');
labelBanco.innerHTML = "Banco";

const labelCuenta = document.createElement('p');
labelCuenta.innerHTML = "Cuenta";

const labelMoneda = document.createElement('p');
labelMoneda.innerHTML = "Moneda Conciliación";

const derecha = document.getElementById('derecha');

const subir = document.createElement('input');
subir.id = "subir";
subir.type = "file";

const divBoton = document.createElement('div');
divBoton.classList.add('divBoton')

const boton = document.createElement('input');
boton.type = "checkbox"
boton.id = "boton";

const labelBoton = document.createElement('label');
labelBoton.classList.add('label');

const inputMes = document.createElement('form'); 

const selectMes = document.createElement('select');

const nada = document.createElement('option');
nada.innerHTML = "-- Seleccione --";

const mesUno = document.createElement('option');
mesUno.innerHTML = "06/2021";

const mesDos = document.createElement('option');
mesDos.innerHTML = "07/2021";

const mesTres = document.createElement('option');
mesTres.innerHTML = "08/2021";

const mesCuatro = document.createElement('option');
mesCuatro.innerHTML = "09/2021";

const mesCinco = document.createElement('option');
mesCinco.innerHTML = "10/2021";

const mesSeis = document.createElement('option');
mesSeis.innerHTML = "11/2021";

const mesSiete = document.createElement('option');
mesSiete.innerHTML = "12/2021";

const inputBancos = document.createElement('form'); 

const selectBancos = document.createElement('select');

const nadaBancos = document.createElement('option');
nadaBancos.innerHTML = "-- Seleccione --";

const bancoUno = document.createElement('option');
bancoUno.innerHTML = "Banco de Bogotá";

const bancoDos = document.createElement('option');
bancoDos.innerHTML = "Bancolombia S.A";

const bancoTres = document.createElement('option');
bancoTres.innerHTML = "Davivienda";

const inputCuenta = document.createElement('form'); 

const selectCuenta = document.createElement('select');

const nadaCuenta = document.createElement('option');
nadaCuenta.innerHTML = "-- Seleccione --";

const cuentaAhorros = document.createElement('option');
cuentaAhorros.innerHTML = "Cuenta de ahorros";

const cuentaCorriente = document.createElement('option');
cuentaCorriente.innerHTML = "Cuenta corriente";

body.append(main);
main.append(header, formulario);
header.append(titulo, linea, abajoLinea);
abajoLinea.append(demo, fecha);
formulario.append(izquerda, derecha);
divBoton.append(boton, labelBoton)
izquerda.append(labelArchivos, labelCeros, labelMes, labelBanco, labelCuenta, labelMoneda);
derecha.append(subir, divBoton, inputMes, inputBancos, inputCuenta);
inputMes.append(selectMes);
selectMes.append(nada, mesUno, mesDos, mesTres, mesCuatro, mesCinco, mesSeis, mesSiete);
inputBancos.append(selectBancos);
selectBancos.append(nadaBancos, bancoUno, bancoDos, bancoTres);
inputCuenta.append(selectCuenta);
selectCuenta.append(nadaCuenta, cuentaAhorros, cuentaCorriente);