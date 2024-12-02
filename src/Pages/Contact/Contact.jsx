import React from 'react';
import './Contact.css';
//import Navbar from '../../components/Navbar/Navbar.jsx';
//import Footer from '../../components/Footer/Footer.jsx';

const ContactPage = () => {
  return (
    <div>
     {/* <Navbar /> */}
      
      <main className="main">
        <div className="main-conteiner">
          <div className="heading-container">
            <h2>¿Cómo podemos ayudarte?</h2>
          </div>
          
          <section className="contact-section">
            <div className="form-container">
              <form className="contact-form" id="formulario">
                <h3 className="form-heading">¡Envíanos tu mensaje!</h3>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required />
                <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required />
                <input type="email" id="correo" name="correo" placeholder="Correo electrónico" required />
                <input type="text" id="asunto" name="asunto" placeholder="Asunto" required />
                <textarea id="mensaje" name="mensaje" placeholder="Mensaje" rows="4" required></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>

            {/* Sección de contacto directo */}
            <div className="direct-contact">
              <h3 className="direct-heading">¿Prefieres una línea de contacto más directa?</h3>
              <p className="direct-text1" style={{ textAlign: 'center' }}>
                Si tienes alguna pregunta urgente o <br />
                prefieres hablar directamente con <br />
                nuestro equipo, aquí tienes las <br />
                mejores maneras de contactarnos.
              </p>

              <div className="direct-contact-details">
                <ul>
                  <li>
                    <img src="assents/telefono.webp" alt="telefono" className="icono" />
                    <span>+52 55 xxxx xxxx</span>
                  </li>
                  <br />
                  <li>
                    <img src="assents/correo-electronico.webp" alt="correo" className="icono" />
                    <span>contacto@raicesmx.com</span>
                  </li>
                  <br />
                  <li>
                    <strong>Horario:</strong>
                    Lunes a viernes de <br /> 8:00 a.m. a 5:30 p.m.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

    {/*  <Footer /> */} 
    </div>
  );
}

export default ContactPage;
