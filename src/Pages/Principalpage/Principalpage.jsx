import React from "react";
import "./Principalpage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Principalpage = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="logo-raices d-none d-lg-flex">
              <a className="navbar-brand" href="./index.html">
                <img
                  src="./Imagenes/Isotipo RaícesMX.svg"
                  alt="Isotipo RaícesMX"
                  className="raices-isotipo"
                />
                <img
                  src="public/assets/Letras RaícesMX.svg"
                  alt="RaícesMX"
                  className="raices-letras"
                />
              </a>
            </div>
            <a className="navbar-brand d-lg-none" href="./index.html">
              <img
                src="public/assets/Logo crema.svg"
                alt="Logo RaícesMX"
                className="logo-raices-sm"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="./pages/menu.html">
                  Menú a domicilio
                </a>
                <a className="nav-link" href="./pages/nosotros.html">
                  Nosotros
                </a>
                <a className="nav-link" href="./pages/Beneficios.html">
                  Beneficios
                </a>
                <a className="nav-link" href="./pages/formularioProducto.html">
                  Formulario Producto
                </a>
                <a className="nav-link" href="#">
                  Iniciar sesión / Registrarse
                </a>
                <a className="nav-link" href="./pages/shopping-cart.html">
                  <i className="bx bxs-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <div className="MainContainer">
          <img
            className="background-image"
            src="public/assets/Pozole.png"
            alt="Olla de pozole rojo"
          />
          <div className="MainContainerText">
            <h1 className="h1MCT">Platillos exquisitos</h1>
            <h2 className="h2MCT">TODOS LOS DÍAS</h2>
          </div>
          <div className="MainContainerButtons">
            <a href="#" className="button">
              <strong>Suscríbete</strong>
            </a>
            <a href="#" className="button">
              <strong>Menú a domicilio</strong>
            </a>
          </div>
        </div>
      </main>

      <section className="SecundaryContainer">
        <h1 className="SecundaryContainertitle">Menús del día</h1>
        <section className="menusContainer">
          {/* Reutilizar componente para cada carrusel */}
        </section>
      </section>

      <footer className="footer">
        <div className="icons">
          <a href="#" target="_blank">
            <i className="fi fi-brands-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fi fi-brands-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fi fi-brands-twitter-alt"></i>
          </a>
        </div>
        <div className="footertext">
          <p>Copyright &copy; 2024, RaícesMX, Inc. All rights reserved</p>
          <hr className="divide2" />
          <div className="linktext">
            <p>Aviso de privacidad</p>
          </div>
          <div>
            <a href="./pages/contact.html" className="contactbutton">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Principalpage;
