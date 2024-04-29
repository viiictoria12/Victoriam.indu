function validarFormulario() {
    // Aquí puedes agregar restricciones adicionales si lo deseas
    return true; // Siempre devuelve true para permitir el envío del formulario
}

function enviarDatosPorWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('dire').value;
    var pais = document.getElementById('pais').value;
    var ciudad = document.getElementById('ciudad').value;
    var postal = document.getElementById('postal').value;
    var telefono = document.getElementById('phone').value;
    var envio = document.querySelector('input[name="envio"]:checked').value;

    var mensaje = "Nombre: " + nombre + "\n" +
        "Apellido: " + apellido + "\n" +
        "Email: " + email + "\n" +
        "Dirección: " + direccion + "\n" +
        "País: " + pais + "\n" +
        "Ciudad: " + ciudad + "\n" +
        "Código Postal: " + postal + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Método de Envío: " + envio;

    // Reemplaza 'NUMERO_DE_TELEFONO' con el número de teléfono al que quieres enviar el mensaje por WhatsApp
    window.location.href = "https://wa.me/1128649573/?text=" + encodeURIComponent(mensaje);
}