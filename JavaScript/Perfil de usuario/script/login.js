const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const formulario = document.getElementById('formulario');
const parrafo = document.getElementById('aviso');

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let alerta = ""
    if(nombre.value.length <6){
        alerta += `El nombre no es valido <br>`
    }
})
