// Variable donde capturamos el elemento HTML del formulario.
let form = document.getElementById("registro");

function enviarData (datosformulario) {
    // datos a bbdd
}

// Constructor del objeto "datosRegistro"
/**
 * Constructor del objeto "datosRegistro"
 * @param {*} nombre 
 * @param {*} apellido 
 * @param {*} fechaNac 
 * @param {*} email 
 * @param {*} numTef 
 * @param {*} intereses 
 * @param {*} otros 
 */
const datosRegistro = function (nombre, apellido, fechaNac, email, numTef, intereses, otros) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.email = email;
    this.numTef = numTef;
    this.intereses = intereses;
    this.otros = otros
}

// Función que permite capturar los datos y generar el objeto.
/**
 * Función que captura datos del formulario y genera el objeto con los datos.
 * @returns object
 */
function crearRegistro() {
    let nombre, apellidos, fechaNac, email, numTef, intereses, otros;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellido").value;
    fechaNac = document.getElementById("fechaNac").value;
    email = document.getElementById("email").value;
    numTef = document.getElementById("numTef").value;
    otros = document.getElementById("otros").value;
    // Método para recoger las opciones marcadas en el checkbox y guardarlas en un array.
    let checkboxesIntereses = document.querySelectorAll('input[name="intereses"]:checked');
    intereses = [];
    checkboxesIntereses.forEach(function (checkbox) {
        intereses.push(checkbox.value);
    });
    // Fin del método //

    let registro = new datosRegistro(nombre, apellidos, fechaNac, email, numTef, intereses, otros)
    console.log('datos guardados', registro)
    console.log('datos: ', nombre, apellidos, fechaNac, email, numTef, intereses, otros)
    // form.submit(); <= ejecución del formulario si todo está correcto, con este comando mandaría los datos. //
    /**
     * La interfaz FormData proporciona una manera sencilla de construir
     * un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores,
     * que pueden ser enviados fácilmente con el método XMLHttpRequest.send(). 
     */
    let datos = new FormData(form)
    console.log(datos) 
 
    return registro;
}

/**
 * Función para mostrar los datos en el HTML
 **/
function mostrarDatos(){
    let registro = crearRegistro();
    let template = `
    <p><b>Nombre:</b> ${registro.nombre}</p>
    <p><b>Apellido:</b> ${registro.apellido}</p>
    <p><b>Fecha de Nacimiento:</b> ${registro.fechaNac}</p>
    <p><b>Email:</b> ${registro.email}</p>
    <p><b>Nº de Tlf.:</b> ${registro.numTef}</p>
    <p><b>Intereses:</b> ${registro.intereses.join(', ')}</p>
    <p><b>Otros:</b> ${registro.otros}</p>
    <button onclick="ocultar();">Borrar</button>
    `;
    let containerDatos = document.getElementById('datos');
    containerDatos.innerHTML = template
    containerDatos.style.display == "block" ? containerDatos.style.display = "none" : containerDatos.style.display = "block"
}

/**
 * Función para retener los datos y ocultar la ventana donde se muestran los datos.
 */
function ocultar(){
    let containerDatos = document.getElementById('datos');
    containerDatos.style.display = "none"
    form.reset();
}