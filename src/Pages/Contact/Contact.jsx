import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  // Estado para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  // Estado para la validación de los campos
  const [validaciones, setValidaciones] = useState({
    nombre: false,
    telefono: false,
    correo: false,
    asunto: false,
    mensaje: false,
  });

  // Estado para controlar el campo enfocado
  const [campoEnfocado, setCampoEnfocado] = useState('');

  // Expresiones regulares para validar los campos
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{10}$/, // Solo números, exactamente 10 dígitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato de correo.
    asunto: /^.{1,50}$/, // Máximo 50 caracteres, no vacío.
    mensaje: /^.{1,300}$/s, // Máximo 300 caracteres, no vacío.
  };

  // Mensajes de ayuda
  const mensajeAyuda = {
    nombre: "Solo letras y espacios (máximo 40 caracteres)",
    telefono: "Número de 10 dígitos (sin espacios)",
    correo: "Correo válido (ejemplo@dominio.com)",
    asunto: "Máximo 50 caracteres",
    mensaje: "Escribe tu mensaje (máximo 300 caracteres)",
  };

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar el campo específico
    switch (name) {
      case 'nombre':
        setValidaciones({
          ...validaciones,
          nombre: expresiones.nombre.test(value),
        });
        break;
      case 'telefono':
        setValidaciones({
          ...validaciones,
          telefono: expresiones.telefono.test(value),
        });
        break;
      case 'correo':
        setValidaciones({
          ...validaciones,
          correo: expresiones.correo.test(value),
        });
        break;
      case 'asunto':
        setValidaciones({
          ...validaciones,
          asunto: expresiones.asunto.test(value),
        });
        break;
      case 'mensaje':
        setValidaciones({
          ...validaciones,
          mensaje: expresiones.mensaje.test(value),
        });
        break;
      default:
        break;
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página

    // Comprobar si todos los campos son válidos
    const formValido = Object.values(validaciones).every((val) => val === true);

    if (formValido) {
      alert("Formulario enviado con éxito.");
      // Limpiar los datos del formulario
      setFormData({
        nombre: '',
        telefono: '',
        correo: '',
        asunto: '',
        mensaje: '',
      });

      // Limpiar validaciones
      setValidaciones({
        nombre: false,
        telefono: false,
        correo: false,
        asunto: false,
        mensaje: false,
      });
    } else {
      alert("Por favor, rellena todos los campos correctamente");
    }
  };

  // Función para manejar el enfoque (focus) en los campos
  const handleFocus = (e) => {
    setCampoEnfocado(e.target.name); // Actualiza el campo enfocado
  };

  // Función para manejar el desenfoque (blur) de los campos
  const handleBlur = () => {
    setCampoEnfocado(''); // Restablece el campo enfocado cuando pierde el enfoque
  };

  
  return (
    <div>
      <main className="main-contact">
        <div className="main-container-contact">
          <div className="heading-container">
            <h2>¿Cómo podemos ayudarte?</h2>
          </div>
          <section className="contact-section">
            <div className="form-container">
              <form className="contact-form" id="formulario" onSubmit={handleSubmit}>
                <h3 className="form-heading">¡Envíanos tu mensaje!</h3>

                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <span id="ayuda-nombre" className={`mensaje-ayuda ${campoEnfocado === 'nombre' ? 'mostrar' : ''}`}
                >
                {mensajeAyuda.nombre}
                </span>

                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <span id="ayuda-telefono" className={`mensaje-ayuda ${campoEnfocado === 'telefono' ? 'mostrar' : ''}`}
                >
                   {mensajeAyuda.telefono}
                </span>

                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Correo electrónico"
                  value={formData.correo}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <span id="ayuda-correo" className={`mensaje-ayuda ${campoEnfocado === 'correo' ? 'mostrar' : ''}`}
                >
                {mensajeAyuda.correo}
                </span>

                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  placeholder="Asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
                <span id="ayuda-asunto" className={`mensaje-ayuda ${campoEnfocado === 'asunto' ? 'mostrar' : ''}`}
                >
                {mensajeAyuda.asunto}
                </span>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  rows="4"
                  required
                ></textarea>
                <span id="ayuda-mensaje" className={`mensaje-ayuda ${campoEnfocado === 'mensaje' ? 'mostrar' : ''}`}
                >
                 {mensajeAyuda.mensaje}
                </span>

                <button type="submit">Enviar</button>
              </form>
            </div>

            {/* Sección de contacto directo */}
            <div className="direct-contact">
              <h3 className="direct-heading">¿Prefieres una línea de contacto más directa?</h3>
              <p className="direct-text1" style={{ textAlign: "center" }}>
                Si tienes alguna pregunta urgente o <br /> prefieres hablar directamente con
                <br />
                nuestro equipo, aquí tienes las <br /> mejores maneras de contactarnos
              </p>
              <div className="direct-contact-details">
                <ul>
                  <li>
                    <img src="assets/telefono.webp" alt="Teléfono" className="icono" />
                    <span>+52 55 xxxx xxxx</span>
                  </li>
                  <br />
                  <li>
                    <img src="assets/correo-electronico.webp" alt="Correo" className="icono" />
                    <span>contacto@raicesmx.com</span>
                  </li>
                  <br />
                  <li>
                    <strong>Horario:</strong> Lunes a viernes de <br /> 8:00 a.m. a 5:30 p.m.
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
