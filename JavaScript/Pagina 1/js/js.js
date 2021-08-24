let main = document.createElement("main");

let img_imagen_seccion = document.createElement("img");
img_imagen_seccion.setAttribute("class", "foto1");
img_imagen_seccion.src = "Imagenes/foto1.jpg";

let section = document.createElement("section");

let div_texto = document.createElement("div");
div_texto.setAttribute("class", "parrafo");

let h3 = document.createElement("h3");
h3.innerText =
	"Shift the overall look and feel by adding these wonderful touches to furniture in your home";

let p = document.createElement("p");
p.innerText =
	"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.";

let div_compartir = document.createElement("div");
div_compartir.setAttribute("class", "perfil");

let img_perfil = document.createElement("img");
img_perfil.setAttribute("class", "avatar");
img_perfil.src = "Imagenes/Michelle.jpg";

let div_datos = document.createElement("div");
div_datos.setAttribute("class", "datos");

let h5 = document.createElement("h5");
h5.innerText = "Michelle Appleton";

let h6 = document.createElement("h6");
h6.innerText = "28 Jun 2020";

let div_boton = document.createElement("div");
div_boton.setAttribute("class", "boton");

let button = document.createElement("button");
button.type = "submit";
button.setAttribute("class","boton")

let div_redes = document.createElement("div");
div_redes.setAttribute("class", "redes");

let img_button = document.createElement("img");
img_button.src = "/Imagenes/Boton.svg";

let img_pinterest = document.createElement("img");
img_pinterest.src = "Imagenes/blanco.svg";

document.body.append(main);
main.append(img_imagen_seccion);
main.append(section);
section.append(div_texto);
div_texto.append(h3);
div_texto.append(p);
section.append(div_compartir);
div_compartir.append(img_perfil);
div_compartir.append(div_datos);
div_datos.append(h5);
div_datos.append(h6);
div_compartir.append(div_boton);
div_boton.append(button);
button.append(img_button);
div_boton.append(div_overlay);
div_overlay.append(div_redes);
div_redes.append(p_share);
div_redes.append(img_boton_compartir);