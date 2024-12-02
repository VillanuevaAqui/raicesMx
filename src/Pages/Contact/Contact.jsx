import React from 'react';
import './Contact.css';
import { useState,useEffect } from 'react';

//import Navbar from '../../components/Navbar/Navbar.jsx';
//import Footer from '../../components/Footer/Footer.jsx';


const ContactPage = () => {
    useEffect(() => {
      // El código del archivo contact.js adaptado para React se coloca aquí dentro.
      const formulario = document.getElementById("formulario");
      const inputs = document.querySelectorAll(
        "#formulario input, #formulario textarea"
      );
  
      const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        telefono: /^\d{10}$/, // Solo números, exactamente 10 dígitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato de correo.
        asunto: /^.{1,50}$/, // Máximo 50 caracteres, no vacío.
        mensaje: /^.{1,300}$/s, // Máximo 300 caracteres, no vacío.
      };
  
      const campos = {
        nombre: false,
        telefono: false,
        correo: false,
        asunto: false,
        mensaje: false,
      };
  
      const mensajeAyuda = {
        nombre: "Solo letras y espacion (máximo 40 caracteres)",
        telefono: "Número de 10 dígitos(sin espacios)",
        correo: "Correo válido (ejemplo@dominio.com)",
        asunto: "Máximo 50 caracteres",
        mensaje: "Escribe tu mensaje(máximo 300 caracteres)",
      };
  
      const validarFormulario = (e) => {
        if (
          e.target.tagName.toLowerCase() === "input" ||
          e.target.tagName.toLowerCase() === "textarea"
        ) {
          switch (e.target.name) {
            case "nombre":
              validarCampo(expresiones.nombre, e.target, "nombre");
              break;
            case "telefono":
              validarCampo(expresiones.telefono, e.target, "telefono");
              break;
            case "correo":
              validarCampo(expresiones.correo, e.target, "correo");
              break;
            case "asunto":
              validarCampo(expresiones.asunto, e.target, "asunto");
              break;
            case "mensaje":
              validarCampo(expresiones.mensaje, e.target, "mensaje");
              break;
            default:
              break;
          }
        }
      };
  
      const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
          input.classList.remove("input-error");
          input.classList.add("input-correcto");
          campos[campo] = true; // Campo correctamente validado
        } else {
          input.classList.remove("input-correcto");
          input.classList.add("input-error");
          campos[campo] = false; // Campo incorrecto
        }
      };
  
      inputs.forEach((input) => {
        if (input.name) {
          input.addEventListener("keyup", validarFormulario);
          input.addEventListener("blur", validarFormulario);
        }
      });
  
      inputs.forEach((input) => {
        const ayuda = document.getElementById(`ayuda-${input.name}`);
  
        input.addEventListener("focus", () => {
          if (ayuda) {
            ayuda.textContent = mensajeAyuda[input.name];
            ayuda.classList.add("mostrar");
          }
        });
  
        input.addEventListener("blur", () => {
          if (ayuda) {
            ayuda.classList.remove("mostrar");
          }
        });
      });
  
      formulario.addEventListener("submit", (e) => {
        e.preventDefault();
  
        if (
          campos.nombre &&
          campos.telefono &&
          campos.correo &&
          campos.asunto &&
          campos.mensaje
        ) {
          alert("Formulario enviado con éxito.");
          formulario.reset();
  
          inputs.forEach((input) => {
            input.classList.remove("input-correcto");
          });
        } else {
          alert("Por favor, rellena todos los campos correctamente");
        }
      });
  
      // Cleanup event listeners on component unmount
      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("keyup", validarFormulario);
          input.removeEventListener("blur", validarFormulario);
        });
  
        formulario.removeEventListener("submit", validarFormulario);
      };
    }, []);
  
    return (
      <div>
        <main className="main">
          <div className="main-container">
            <div className="heading-container">
              <h2>¿Cómo podemos ayudarte?</h2>
            </div>
            <section className="contact-section">
              <div className="form-container">
                <form className="contact-form" id="formulario">
                  <h3 className="form-heading">¡Envíanos tu mensaje!</h3>
  
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre completo"
                    required
                  />
                  <span id="ayuda-nombre" className="mensaje-ayuda"></span>
  
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono"
                    required
                  />
                  <span id="ayuda-telefono" className="mensaje-ayuda"></span>
  
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Correo electrónico"
                    required
                  />
                  <span id="ayuda-correo" className="mensaje-ayuda"></span>
  
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    placeholder="Asunto"
                    required
                  />
                  <span id="ayuda-asunto" className="mensaje-ayuda"></span>
  
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Mensaje"
                    rows="4"
                    required
                  ></textarea>
                  <span id="ayuda-mensaje" className="mensaje-ayuda"></span>
  
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