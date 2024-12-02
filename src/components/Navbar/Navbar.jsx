import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* Logo grande visible en pantallas grandes */}
                <div className="logo-raices d-none d-lg-flex">
                    <Link className="navbar-brand" to="/">
                        <img
                            src="/assets/Isotipo-RaicesMX.svg"
                            alt="Isotipo RaícesMX"
                            className="raices-isotipo"
                        />
                        <img
                            src="/assets/Letras-RaicesMX.svg"
                            alt="RaícesMX"
                            className="raices-letras"
                        />
                    </Link>
                </div>

                {/* Logo pequeño visible en pantallas pequeñas */}
                <Link className="navbar-brand d-lg-none" to="/">
                    <img
                        src="/assets/Logo-crema.svg"
                        alt="Logo RaícesMX"
                        className="logo-raices-sm"
                    />
                </Link>

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
                        <Link className="nav-link" to="/menu">
                            Menú a domicilio
                        </Link>
                        <Link className="nav-link" to="/nosotros">
                            Nosotros
                        </Link>
                        <Link className="nav-link" to="/beneficios">
                            Beneficios
                        </Link>
                        <Link className="nav-link" to="/formularioProducto">
                            Formulario Producto
                        </Link>
                        <Link className="nav-link" to="/registro">
                            Iniciar sesión / Registrarse
                        </Link>
                        <Link className="nav-link" to="/cart">
                            <i className="bx bxs-cart"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
