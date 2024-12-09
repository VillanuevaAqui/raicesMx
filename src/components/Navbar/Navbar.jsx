import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import CartBadge from "../CartBadge/CartBadge";
import AccountMenu from "../AccountMenu/AccountMenu";

const Navbar = ({ setShowRegister }) => {

    const logout = () => {

    }

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
                        <NavLink className="nav-link" to="/menu">
                            Menú a domicilio
                        </NavLink>
                        <NavLink className="nav-link" to="/nosotros">
                            Nosotros
                        </NavLink>
                        <NavLink className="nav-link" to="/beneficios">
                            Beneficios
                        </NavLink>
                        <button className="nav-link" onClick={() => setShowRegister(true)}>Iniciar sesión / Registrarse</button>
                        <AccountMenu />
                        <NavLink className="nav-link" to="/cart">
                            <CartBadge />
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


{/* <div className="navbar-profile nav-link">
<Person2Icon
    style={{ color: "var(--secondary)", fontSize: "30", cursor: "pointer" }} />
<ul className="nav-profile-dropdown">
    <li><Link className="nav-profile-link" to="/userpage"><AccountBoxIcon fontSize="large"/><p>Mi cuenta</p></Link></li>
    <hr className="nav-profile-dropdown-divider"/>
    <li><Link className="nav-profile-link" to="/formularioProducto"><AdminPanelSettingsIcon fontSize="large" /><p>Administrador</p></Link></li>
    <hr className="nav-profile-dropdown-divider"/>
    <li onClick={logout}><LogoutIcon fontSize="large" /><p>Cerrar sesión</p></li>
</ul>
</div> */}