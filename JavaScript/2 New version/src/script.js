const body = document.body,
    main = document.querySelector('main');

const barra = document.createElement('div');
barra.classList.add('barra');

const soporte = document.createElement('h4');
soporte.innerHTML = "<h3 class=`gris`>S</h3><h2 class=`blanco`>incoS</h2><h1 class=`azul`>oporte</h1>";
soporte.classList.add('soporte');

const titulo = document.createElement('p');
titulo.innerHTML = "Nuestra </br>página de </br>soporte ha </br><p class='azul'>evolucionado</p>";
titulo.classList.add('titulo');

const flex = document.createElement('div');
const uno = document.getElementById('uno');
const abajo = document.getElementById('abajo'),
    dos = document.getElementById('dos'),
    tres = document.getElementById('tres');

const imagenCubo = document.createElement('img');
imagenCubo.src = "./Imagenes/figure.png";
imagenCubo.classList.add('imagenCubo');

const viejo = document.createElement('img');
viejo.src = "./Imagenes/oldVersion.png";
viejo.classList.add('imagenVista');

const descripVieja = document.createElement('h2');
descripVieja.innerHTML = "Esta opción dejará de ser vigente";
descripVieja.classList.add('descripVieja');

const contenedorDosIzquierda = document.createElement('div');
contenedorDosIzquierda.classList.add('contenedorDosIzquierda');

const nueva = document.createElement('img');
nueva.src = "./Imagenes/newVersion.png";
nueva.classList.add('imagenVista');

const descripNueva = document.createElement('h2');
descripNueva.innerHTML = "Accede </br>desde el marco a la nueva opción";
descripNueva.classList.add('descripNueva');

const contenedorDosDerecha = document.createElement('div');
contenedorDosDerecha.classList.add('contenedorDosDerecha');

const persona = document.createElement('img');
persona.src = "./Imagenes/Person.png";
persona.classList.add('persona');

body.append(main);
main.append(barra, flex);
barra.append(soporte);
flex.append(uno, abajo);
abajo.append(dos, tres);
uno.append(imagenCubo, titulo);
dos.append(contenedorDosIzquierda, contenedorDosDerecha);
contenedorDosIzquierda.append(viejo, descripVieja);
contenedorDosDerecha.append(nueva, descripNueva);
tres.append(persona);