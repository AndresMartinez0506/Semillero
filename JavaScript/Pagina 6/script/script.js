const body = document.body,

    contenedor_principal = document.createElement("main"),

    izquierda = document.createElement("aside"),
    titulo = document.createElement("h1"),
    descripcion_titulo = document.createElement("p"),

    derecha = document.createElement("aside"),
    cartel_oferta = document.createElement("div"),
    texto_oferta = document.createElement("p"),

    contenedor = document.createElement("section"),
    formulario = document.createElement("form"),
    nombre = document.createElement("input"),
    apellido = document.createElement("input"),
    correo = document.createElement("input"),
    contraseña = document.createElement("input"),
    boton = document.createElement("button");

const fin = document.createElement("footer");

contenedor_principal.setAttribute("class", "contenedor_principal");
izquierda.setAttribute("class", "izquierda");
titulo.setAttribute("class", "titulo");
titulo.innerHTML = "Learn to code by watching others"
descripcion_titulo.setAttribute("class", "descrip_titu");
descripcion_titulo.innerHTML = "See how experienced developers solve  problems in rela-time. Waching scripted tutorials is great, but understanndig how developers think is invaluable."

derecha.setAttribute("class", "derecha");
cartel_oferta.setAttribute("class", "oferta");
texto_oferta.setAttribute("class", "texto_oferta");
texto_oferta.innerHTML = "<b>Try it free 7 days</b> then $20/mo. hereafter";

contenedor.classList.add("contenedor_grande");
formulario.name = "formulario";
formulario.id = "formulario";

nombre.classList.add("input");
nombre.type = "text";
nombre.id = "nombre";
nombre.name = "nombre";
nombre.placeholder = "First Name";
nombre.required = "required";

apellido.classList.add("input");
apellido.type = "text";
apellido.id = "apellido";
apellido.name = "apellido";
apellido.placeholder = "Last Name";
apellido.required = "required";

correo.classList.add("input");
correo.type = "email";
correo.id = "correo";
correo.name = "correo";
correo.placeholder = "Email Address";
correo.required = "required";

contraseña.classList.add("input");
contraseña.type = "password";
contraseña.id = "contraseña";
contraseña.name = "contraseña";
contraseña.placeholder = "Password";
contraseña.required = "required";

boton.classList.add("boton");
boton.type = "submit";
boton.innerText = "CLAIM YOUR FREE TRIAL";

let mensaje_error = document.createElement("span");
mensaje_error.innerText = "¡Algún campo esta vacío!";
mensaje_error.setAttribute("class", "mensaje_vacio");
formulario.append(mensaje_error);
mensaje_error.style.display = "none";

fin.setAttribute("class", "fin");
fin.innerHTML = "By clicking the button, you are agreeing to our" + "<b>Terms and Services</b>";

body.append(contenedor_principal);
contenedor_principal.append(izquierda, derecha);
izquierda.append(titulo, descripcion_titulo);
derecha.append(cartel_oferta, contenedor);
contenedor.append(formulario);
formulario.append(nombre, apellido, correo, contraseña, boton);
cartel_oferta.append(texto_oferta);
formulario.append(fin);

let lista_inputs = Array.from(document.querySelectorAll("input"));
lista_inputs.map((input) => {
    input.addEventListener("keyup", () => {
        switch (input.id != "contraseña") {
            case true:
                let validaciones_para_nombres = new RegExp("^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$");
                let validacion_correo = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z]+\.+com");
                if (input.value == "") {
                    mensaje_error.style.display = "flex";
                } else if (input.id == "correo") {
                    if (!validacion_correo.test(input.value)) {
                        input.classList.add("error_validacion");
                        mensaje_error.style.display = "none"; 
                    }else{
                        input.classList.remove("error_validacion");                 
                    }
                }  else if (input.id == "nombre" || input.id == "apellido") {
                    if (!validaciones_para_nombres.test(input.value)) {
                        input.classList.add("error_validacion");
                        mensaje_error.style.display = "none";
                    }else{
                        input.classList.remove("error_validacion");                 
                    }
                }
                break;
            case false:
                let validacion_contraseña = new RegExp("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$")
                if (input.value == ""){
                    mensaje_error.style.display = "flex";
                }   else {
                    if (!validacion_contraseña.test(input.value)){
                        input.classList.add("error_validacion");
                        mensaje_error.style.display = "none";
                    }else{
                        input.classList.remove("error_validacion");                 
                    }
                }
                
        }
    })
})