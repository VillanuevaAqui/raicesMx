

// Selecciona el formulario completo utilizando el ID formulario.
const formulario = document.getElementById('formulario');

//Selecciona todos los elementos input y textarea dentro del formulario.
const inputs = document.querySelectorAll('#formulario input, #formulario textarea'); 



const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono:  /^\d{10}$/, // Solo números, exactamente 10 dígitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato de correo.
    asunto: /^.{1,50}$/, // Máximo 50 caracteres, no vacío.
    mensaje: /^.{1,300}$/s // Máximo 300 caracteres, no vacío.
};

//objeto campo inicializado en false, se cambia a true 
const campos = {
    nombre: false,
    telefono:false,
    correo: false,
    asunto: false,
    mensaje: false
};

// Mensajes de ayuda se mostrarán cuando un usuario enfoque el campo correspondiente.

const mensajeAyuda = {

    nombre: "Solo letras y espacion (máximo 40 caracteres)",
    telefono: "Número de 10 dígitos(sin espacios)",
    correo: "Correo válido (ejemplo@dominio.com)",
    asunto: "Máximo 50 carcteres",
    mensaje: "Escribe tu mensaje(máximo 300 caracteres)"
}

// Validación de los campos

//La función validarFormulario es llamada cada vez que el usuario interactúa con un campo de entrada, input o textarea, ya sea al escribir en el campo, keyup o cuando el campo pierde el enfoque (blur).

const validarFormulario = (e) => {

//Se usa un parametro e, es el evento que ocurre cuando el usuario interactura con los campos del formulario

//e.target hace referencia al elemento que generó el evento (el campo en el que el usuario está escribiendo o ha hecho clic).
    if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') {

        switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case "telefono":
                 validarCampo(expresiones.telefono, e.target, 'telefono');
                break;
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
                break;
            case "asunto":
                validarCampo(expresiones.asunto, e.target, 'asunto');
                break;
            case "mensaje":
                validarCampo(expresiones.mensaje, e.target, 'mensaje');
                break;
        }
    }
};

// Validar cada campo

//Esta función es la encargada de validar el valor ingresado en cada campo utilizando la expresión regular asociada.

const validarCampo = (expresion, input, campo) => {

    if (expresion.test(input.value)) {

        input.classList.remove('input-error');
        input.classList.add('input-correcto');
        campos[campo] = true; // Campo correctamente validado

    } else {

        input.classList.remove('input-correcto');
        input.classList.add('input-error');
        campos[campo] = false; // Campo incorrecto
    }

    //Si el valor del campo coincide con la expresión regular, agrega la clase input-correcto y marca el campo como validado (true).
};

// Asignar eventos a los inputs
inputs.forEach((input) => {
    if (input.name) {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    }
});


// Mostrar mensaje de ayuda al enfocar el campo

//Cuando el usuario hace foco (focus) en un campo de entrada, se muestra el mensaje de ayuda correspondiente, y cuando pierde el foco (blur), se oculta.

inputs.forEach((input) => {
    const ayuda = document.getElementById(`ayuda-${input.name}`);

    input.addEventListener('focus', () => {
        if (ayuda) {
            ayuda.textContent = mensajeAyuda[input.name];
            ayuda.classList.add('mostrar');
        }
    });

    // Ocultar mensaje de ayuda al desenfocar el campo
    input.addEventListener('blur', () => {
        if (ayuda) {
            ayuda.classList.remove('mostrar');
        }
    });
});

// Validar formulario al enviar


//Cuando el formulario se envía, se evita que la página se recargue con e.preventDefault(). Luego, se verifica si todos los campos están correctamente validados antes de permitir el envío del formulario:


formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar recarga de la página

    console.log(campos); // Verificar los valores en consola

    if (campos.nombre && campos.telefono && campos.correo && campos.asunto && campos.mensaje) {
        alert("Formulario enviado con éxito.");
        formulario.reset(); // Restablecer el formulario

        // Limpiar clases de los inputs después de enviar
        inputs.forEach((input) => {
            input.classList.remove('input-correcto');
        });
    } else {
        alert("Por favor, rellena todos los campos correctamente");
    }
});

//Si todos los campos son válidos (es decir, todos los valores en campos son true), muestra una alerta de éxito y resetea el formulario.