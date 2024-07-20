/**
 * challenge de encriptador de texto para el curso de Alura 
 * 19 de julio de 2024
 * @Autor Romero Flores Brian Michelle.
 */

//funcion para obtener el texto ingresado
function obtenerMensaje() {
    let entradaTexto = document.getElementById('texto').value;
    return entradaTexto;
}
//funcion que valida la entrada de caracteres en minusculas mediante expresiones regulares
function validacionMinusculas(mensaje) {
    let regex = /^[a-z ]+$/;
    return regex.test(mensaje);
}
//funcion para controlar el mensaje de error en caso de no cumplir con la expresión regular
function mensajeError(mensaje) {
    if (!validacionMinusculas(mensaje)) {
        document.getElementById('mensajeFinal').innerText = "Solo se permiten letras minúsculas y sin acentos, por favor ingrese otro mensaje.";
        return true;
    }
    return false;
}
//funcion que realiza la encriptacion 
function encriptarMensaje() {
    let mensaje = obtenerMensaje();
    //manejo de error
    if (mensajeError(mensaje)) {
        return;
    }
    //reglas para cambio en las vocales
    let reglas = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };
    let mensajeEncriptado = "";

    for (let letra of mensaje) {
        mensajeEncriptado += reglas[letra] || letra;
    }
    document.getElementById('mensajeFinal').innerText = mensajeEncriptado;
}

//funcion para desencriptar
function desencriptarMensaje() {
    let mensaje = obtenerMensaje();
    //manejod e error
    if (mensajeError(mensaje)) {
        return;
    }
    //reglas para cambio en las vocales
    let reglas = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };
    let mensajeDesencriptado = mensaje;

    for (let clave in reglas) {
        let valor = reglas[clave];
        mensajeDesencriptado = mensajeDesencriptado.split(clave).join(valor);
    }
    document.getElementById('mensajeFinal').innerText = mensajeDesencriptado;
}

// Asignar eventos a los botones de accion 
document.getElementById('encriptar').addEventListener('click', encriptarMensaje);
document.getElementById('desencriptar').addEventListener('click', desencriptarMensaje);

