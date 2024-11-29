import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fi fi-brands-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fi fi-brands-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
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
          <Link to="/contacto" className="contactbutton">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
