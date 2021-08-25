const body = document.body,

contenedor_principal = document.createElement("main"),

izquierda = document.createElement("aside"),
imagen_logo = document.createElement("img"),
contenedor_botones = document.createElement("article"),
imagen_doc = document.createElement("img"),
imagen_folder = document.createElement("img"),
imagen_nube = document.createElement("img"),

derecha = document.createElement("aside"),

burbuja = document.createElement("article");
let numero_burbuja = document.createElement("h3");
const texto_burbuja = document.createElement("span"),
mensaje = document.createElement("p"),

barra = document.createElement("div"),
progreso_barra = document.createElement("div"),
bolita_barra = document.createElement("div"),

gb_tope =document.createElement("div"),
gb_comienzo = document.createElement("span"),
gb_fin = document.createElement("span");

contenedor_principal.setAttribute("class","contenedor_principal");

izquierda.setAttribute("class","izquierda");
imagen_logo.setAttribute("class","imagen_logo");
imagen_logo.src = "./Imagenes/logo.svg";
contenedor_botones.setAttribute("class","contenedor_botones");
imagen_doc.setAttribute("class","imagen_doc");
imagen_doc.src = "./Imagenes/docBtn.svg";
imagen_folder.setAttribute("class","imagen_folder");
imagen_folder.src = "./Imagenes/folderBtn.svg";
imagen_nube.setAttribute("class","imagen_nube");
imagen_nube.src = "./Imagenes/uploadBtn.svg";


derecha.setAttribute("class","derecha");
burbuja.setAttribute("class","burbuja");
texto_burbuja.setAttribute("class","texto_burbuja");
mensaje.setAttribute("class","mensaje_burbuja");
texto_burbuja.innerHTML ="GB LEFT"
barra.setAttribute("class","barra");
progreso_barra.setAttribute("class","progreso_barra");
bolita_barra.setAttribute("class","bolita_barra");
mensaje.innerHTML =`You've used <b>${1000-185}</b> of your storaged`;
gb_tope.setAttribute("class", "gigas")
gb_comienzo.innerHTML ="0<b>GB</b>"
gb_fin.innerHTML ="1000<b>GB</b>"

body.append(contenedor_principal);
contenedor_principal.append(izquierda, derecha);
izquierda.append(imagen_logo);
izquierda.append(contenedor_botones);
contenedor_botones.append(imagen_doc);
contenedor_botones.append(imagen_folder);
contenedor_botones.append(imagen_nube);
//numero incrementable funct james

derecha.append(burbuja, mensaje,barra, gb_tope);

burbuja.append(numero_burbuja);
burbuja.append(texto_burbuja);

barra.append(progreso_barra);
progreso_barra.append(bolita_barra);

gb_tope.append(gb_comienzo, gb_fin)