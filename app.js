/**
 * challenge de encriptador de texto para el curso de Alura 
 * 19 de julio de 2024
 * @Autor Miche R.
 */

//funcion donde guardamos el mensaje 
function obtenerMensaje() {
    let entradaTexto = document.getElementById('texto').value;
    return entradaTexto;
}

// Función donde evaluamos con expresiones regulares la entrada de letras minusculas
function validacionMinusculas(mensaje) {
    let regex = /^[a-z ]+$/;
    return regex.test(mensaje);
}

// Función para realizar el encriptado
function encriptarMensaje() {
    let mensaje = obtenerMensaje();
    //crearemos un mensaje de error en caso de que ingresen caracteres no validos
    if (!validacionMinusculas(mensaje)) {
        document.getElementById('mensajeFinal').innerText = "Solo se permiten letras minúsculas y sin acentos, por favor ingrese otro mensaje para encriptar.";
        return;
    }

    let abecedario = 'abcdefghijklmnopqrstuvwxyz';
    let mensajeEncriptado = "";
    let desplazamiento = 3;

    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let index = abecedario.indexOf(letra);
        if (index === -1) {
            mensajeEncriptado += letra;
        } else {
            let nuevoIndex = (index + desplazamiento) % abecedario.length;
            mensajeEncriptado += abecedario[nuevoIndex];
        }
    }

    document.getElementById('mensajeFinal').innerText = mensajeEncriptado;
}

// Función para desencriptar mensaje (por ahora solo un log)
function desencriptarMensaje() {
    let mensaje = obtenerMensaje();
    //crearemos un mensaje de error en caso de que ingresen caracteres no validos
    if (!validacionMinusculas(mensaje)) {
        document.getElementById('mensajeFinal').innerText = "Solo se permiten letras minúsculas y sin acentos, por favor ingrese otro mensaje para desencriptar.";
        return;
    }

    let abecedario = 'abcdefghijklmnopqrstuvwxyz';
    let mensajeDesencriptado = "";
    let desplazamiento = 3;

    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let index = abecedario.indexOf(letra);
        if (index === -1) {
            mensajeDesencriptado += letra;
        } else {
            let nuevoIndex = (index - desplazamiento + abecedario.length) % abecedario.length;
            mensajeDesencriptado += abecedario[nuevoIndex];
        }
    }

    document.getElementById('mensajeFinal').innerText = mensajeDesencriptado;
}

// Asignar eventos a los botones
document.getElementById('encriptar').addEventListener('click', encriptarMensaje);
document.getElementById('desencriptar').addEventListener('click', desencriptarMensaje);
