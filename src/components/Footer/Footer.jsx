import "./Footer.css";

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
          <a href="./pages/contact.html" className="contactbutton">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
