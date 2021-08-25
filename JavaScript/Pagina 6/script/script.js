const body = document.body,

contenedor_principal = document.createElement("main"),

izquierda = document.createElement("aside"),
titulo = document.createElement("h1"),
descripcion_titulo = document.createElement("p"),

derecha = document.createElement("aside"),
cartel_oferta = document.createElement("span"),
texto_oferta = document.createElement("p"),

formulario = document.createElement("div");
function form(){var formulario=forms};
const fin = document.createElement("footer");

contenedor_principal.setAttribute("class", "contenedor_principal");
izquierda.setAttribute("class", "izquierda");
titulo.setAttribute("class", "titulo");
titulo.innerHTML = "Learn to code by watching others"
descripcion_titulo.setAttribute("class", "descrip_titu");
descripcion_titulo.innerHTML = "See how experienced developers solve  problems in rela-time Waching scripted tutorials is great, but understanndig how developers think is invaluable."

derecha.setAttribute("class", "derecha");
fin.setAttribute("class", "fin");
fin.innerHTML = "By clicking the button, you are agreeing to our <b>Terms and Services</b>";

body.append(contenedor_principal);

contenedor_principal.append(izquierda, derecha);

izquierda.append(titulo, descripcion_titulo);

derecha.append(cartel_oferta, texto_oferta, formulario);

formulario.append(fin);








