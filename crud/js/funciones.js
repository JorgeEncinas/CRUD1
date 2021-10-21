//Archivo de funciones de JavaScript, Cuidado con moverle mucho!!!

function confirmar() {
    if (confirm("Va a eliminar un registro, �est� usted seguro?")) {
     //   return true;
     document.form.submit();
    }
    return false;
}

function confirmarModificar(){
    if (confirm("Va a Modificar un registro, �est� usted seguro?")) {
        return true;
    }
    return false;
}

