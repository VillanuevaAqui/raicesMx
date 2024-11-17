
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, #formulario textarea'); 
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono:  /^\d{10}$/, // Solo números, exactamente 10 dígitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato de correo.
    asunto: /^.{1,50}$/, // Máximo 50 caracteres, no vacío.
    mensaje: /^.{1,300}$/s // Máximo 300 caracteres, no vacío.
};

const campos = {
    nombre: false,
    telefono:false,
    correo: false,
    asunto: false,
    mensaje: false
};

const mensajeAyuda = {

    nombre: "Introduce solo letras y espacion (máximo 40 caracteres).",
    telefono: "Introduce un número de 10 dígitos(Escribe solo número sin espacios)",
    correo: "Introduce un correo válido (ejemplo@dominio.com)",
    asunto: "Máximo 50 carcteres",
    mensaje: "Escribe tu mensaje(máximo 300 caracteres)"
}

// Validación de los campos
const validarFormulario = (e) => {

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

    // Validar el mensaje
   // if (campo === "mensaje" && input.value.trim().length === 0) {
      //  alert("El campo mensaje no puede estar vacío");
      //  campos[campo] = false;
   // }
};

// Asignar eventos a los inputs
inputs.forEach((input) => {
    if (input.name) {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    }
});


// Mostrar mensaje de ayuda al enfocar el campo
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
