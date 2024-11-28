import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* Logo grande visible en pantallas grandes */}
                <div className="logo-raices d-none d-lg-flex">
                    <a className="navbar-brand" href="./index.html">
                        <img
                            src="src/Isotipo RaícesMX.svg"
                            alt="Isotipo RaícesMX"
                            className="raices-isotipo"
                        />
                        <img
                            src="src/Letras RaícesMX.svg"
                            alt="RaícesMX"
                            className="raices-letras"
                        />
                    </a>
                </div>

                {/* Logo pequeño visible en pantallas pequeñas */}
                <a className="navbar-brand d-lg-none" href="./index.html">
                    <img
                        src="src/Logo crema.svg"
                        alt="Logo RaícesMX"
                        className="logo-raices-sm"
                    />
                </a>

                {/* Botón para el toggle del menú en pantallas pequeñas */}
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

                {/* Menú desplegable */}
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
    );
};

export default Navbar;
