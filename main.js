function sConsole(event) {
    event.preventDefault();
    var nombre = document.getElementById("nform");
    var email = document.getElementById("eform");
    var mensaje = document.getElementById("sform");
    if (nombre == null && email == null && menaje == null){
        console.log("Los campos del formulario no estan correctamente ingresados, intente de nuevo")
    }else{
        var data = "Nombre: " + nombre + "Email: " + email + "Mensaje: " + mensaje;
    console.log(data.value);
    }
  }