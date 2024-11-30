import React, { useState } from "react";
import "./Nosotros.css";

const sections = {
  "Nuestras Raíces": {
    text: `En RaícesMX, estamos comprometidos en hacer la vida más sencilla para personas con agendas ocupadas que buscan opciones de alimentación nutritivas y convenientes. Nuestro servicio ofrece comidas frescas y balanceadas, con un toque de energía y sabor, sin sacrificar tiempo ni calidad. Nos especializamos en brindar una experiencia personalizada que combina nutrición, bienestar y sostenibilidad. Diseñamos cada entrega pensando en tu salud y en el cuidado del planeta, asegurándonos de ser una opción confiable y accesible para todos aquellos que desean mejorar sus hábitos alimenticios de manera práctica y responsable.`,
    logo: "/public/assets/nosotros20.webp",
  },
  "Alianzas responsables": {
    text: `En RaícesMX, creemos en el poder de las alianzas para construir un futuro más sostenible. Trabajamos de la mano con pequeños productores locales que comparten nuestros valores, garantizando ingredientes frescos y de alta calidad. Estas colaboraciones no solo impulsan la economía regional, sino que también refuerzan prácticas agrícolas responsables, ayudando a preservar nuestro planeta mientras llevamos lo mejor de nuestras raíces a tu mesa.`,
    logo: "/public/assets/nosotros10.webp",
  },
  "Semillero de oportunidades": {
    text: `En RaícesMX, vemos la alimentación como un motor de cambio social. Nuestro semillero de oportunidades busca transformar vidas a través del empleo y la formación profesional en comunidades necesitadas. Promovemos el desarrollo de habilidades, creando puentes hacia un futuro lleno de posibilidades. Cada comida que compartes con nosotros contribuye a una cadena de impacto positivo, donde juntos sembramos bienestar y cosechamos esperanza.`,
    logo: "/public/assets/nosotros30.webp",
  },
};

const Nosotros = () => {
  const [activeSection, setActiveSection] = useState("Nuestras Raíces");

  return (
    <main className="main">
      <div className="text-image">
        <div className="about-img-container">
          <img
            src="/public/assets/sobrenosotrosimg.webp"
            alt="Imagen de comida"
            className="responsive-image"
          />
          <div className="image-text">Sobre RaícesMX</div>
        </div>
        <div className="menu">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`listmenu ${activeSection === section ? "active" : ""}`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
      <hr className="divide" />
      <div className="about-section-2">
        <div className="about-textcontainer">
          <div className="about-backgroundtextcolor">
            <p className="about-text-1">{sections[activeSection].text}</p>
          </div>
        </div>
        <div className="about-logo">
          <img src={sections[activeSection].logo} alt="Logo RaícesMX" />
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
