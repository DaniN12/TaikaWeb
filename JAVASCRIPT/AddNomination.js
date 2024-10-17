function confirmarEnvio() {
    var respuesta = confirm("¿Estás seguro de enviar el formulario?");
    if (respuesta) {
        // Continuar con el envío del formulario
        return true;
    } else {
        // Cancelar el envío del formulario
        return false;
    }
}	