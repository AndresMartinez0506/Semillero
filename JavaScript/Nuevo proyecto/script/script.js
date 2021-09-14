const body = document.body,

contenedor_principal = document.createElement("main"),

titulo = document.createElement("h1"),
izquierda = document.createElement("aside"),

derecha = document.createElement("aside"),

contenedor = document.createElement("section"),
formulario = document.createElement("form"),
nombre = document.createElement("input"),
apellido = document.createElement("input"),
correo = document.createElement("input"),
cvv = document.createElement("input"),
numeroTarjeta = document.createElement("input"),
fechaNacimiento = document.createElement("input"),
identidad = document.createElement("input"),
cuotas = document.createElement("input"),
boton = document.createElement("button");


contenedor_principal.setAttribute("class", "flex");
izquierda.setAttribute("class", "izquierda");
titulo.setAttribute("class", "titulo");
titulo.innerText = "Ingrese los datos de su tarjeta"

derecha.setAttribute("class", "derecha");

contenedor.classList.add("contenedor_grande");
formulario.name = "formulario";
formulario.id = "formulario";

nombre.classList.add("input");
nombre.type = "text";
nombre.id = "nombre";
nombre.name = "nombre";
nombre.placeholder = "Nombre del titular de la tarjeta";
nombre.required = "required";

apellido.classList.add("input");
apellido.type = "date";
apellido.id = "expiracion";
apellido.name = "expiracion";
apellido.placeholder = "Fecha de expiración de la tarjeta";
apellido.required = "required";

correo.classList.add("input");
correo.type = "tel";
correo.id = "telefono";
correo.name = "telefono";
correo.placeholder = "Teléfono del titular";
correo.required = "required";

cvv.classList.add("input");
cvv.type = "password";
cvv.id = "cvv";
cvv.name = "cvv";
cvv.placeholder = "CVV";
cvv.required = "required";

numeroTarjeta.classList.add("input");
numeroTarjeta.type = "number";
numeroTarjeta.id = "numero";
numeroTarjeta.name = "numero";
numeroTarjeta.placeholder = "Número de la tarjeta";
numeroTarjeta.required = "required";

fechaNacimiento.classList.add("input");
fechaNacimiento.type = "date";
fechaNacimiento.id = "nacimiento";
fechaNacimiento.name = "nacimiento";
fechaNacimiento.placeholder = "Fecha de nacimiento del titular";
fechaNacimiento.required = "required";

identidad.classList.add("input");
identidad.type = "number";
identidad.id = "identidad";
identidad.name = "identidad";
identidad.placeholder = "Documento de identidad del titular";
identidad.required = "required";

cuotas.classList.add("cuotas");
cuotas.type = "button";
cuotas.innerText = "Seleccione el número de cuotas";

boton.classList.add("comprar");
boton.type = "list";
boton.innerText = "Realizar compra";

let mensaje_error = document.createElement("span");
mensaje_error.innerText = "¡Hay un campo vacío!";
mensaje_error.setAttribute("class", "mensaje_vacio");
formulario.append(mensaje_error);
mensaje_error.style.display = "none";


body.append(contenedor_principal);
contenedor_principal.append(izquierda, derecha);
izquierda.append(titulo);
derecha.append(contenedor);
contenedor.append(formulario);
formulario.append(nombre, apellido, correo, cvv, numeroTarjeta, 
                fechaNacimiento, identidad, cuotas, boton);

let lista_inputs = Array.from(document.querySelectorAll("input"));
lista_inputs.map((input) => {
input.addEventListener("keyup", () => {
    switch (input.id != "cvv") {
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