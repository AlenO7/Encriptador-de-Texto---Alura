// Función de encriptado según las reglas especificadas
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función de desencriptado según las reglas especificadas
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

// Función que se ejecuta al presionar el botón encriptar
function handleEncriptar() {
    const ingTexto = document.getElementById('ingTexto').value;
    const textoEncriptado = encriptarTexto(ingTexto);
    document.getElementById('saltext').value = textoEncriptado;
}

// Función que se ejecuta al presionar el botón desencriptar
function handleDesencriptar() {
    const ingTexto = document.getElementById('ingTexto').value;
    const textoDesencriptado = desencriptarTexto(ingTexto);
    document.getElementById('saltext').value = textoDesencriptado;
}

// Función que muestra un mensaje en la pantalla
function mostrarMensaje(texto) {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto;
    mensaje.style.display = 'block';
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 2000);
}

// Función que copia el texto del área de salida

function handleCopiar() {
    const salTexto = document.getElementById('saltext');

    if (salTexto) {
        const texto = salTexto.value.trim(); // Elimina espacios en blanco al inicio y al final
        // Verifico si hay texto que copiar
        if (texto === '') {
            mostrarMensaje('No hay texto para copiar');
            return;
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText(texto).then(function() {
                mostrarMensaje('Texto copiado al portapapeles');
            }).catch(function(err) {
                mostrarMensaje('Error al copiar el texto: ' + err);
            });
        } else {
            salTexto.select();
            salTexto.setSelectionRange(0, 99999); // para telefonos
            
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    mostrarMensaje('Texto copiado al portapapeles');
                } else {
                    mostrarMensaje('No se pudo copiar el texto');
                }
            } catch (err) {
                mostrarMensaje('Error al copiar el texto: ' + err);
            }
        }
    } else {
        mostrarMensaje('No se encontró el elemento de texto');
    }
}




// Función que convierte el texto ingresado a minúsculas
function handleInputChange(event) {
    event.target.value = event.target.value.toLowerCase();
}

// Añadir los eventos a los botones
document.getElementById('btnEncriptar').addEventListener('click', handleEncriptar);
document.getElementById('btnDesencriptar').addEventListener('click', handleDesencriptar);
document.getElementById('btnCopiar').addEventListener('click', handleCopiar);
document.getElementById('ingTexto').addEventListener('input', handleInputChange);

