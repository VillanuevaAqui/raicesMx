import React, { useState } from "react";
import "./Nosotros.css";

const sections = {
  "Nuestras Raíces": {
    text: `En RaícesMX, estamos comprometidos en hacer la vida más sencilla para personas con agendas ocupadas que buscan opciones de alimentación nutritivas y convenientes. Nuestro servicio ofrece comidas frescas y balanceadas, con un toque de energía y sabor, sin sacrificar tiempo ni calidad. Nos especializamos en brindar una experiencia personalizada que combina nutrición, bienestar y sostenibilidad. Diseñamos cada entrega pensando en tu salud y en el cuidado del planeta, asegurándonos de ser una opción confiable y accesible para todos aquellos que desean mejorar sus hábitos alimenticios de manera práctica y responsable.`,
    logo: "/assets/nosotros20.webp",
  },
  "Alianzas responsables": {
    text: `En RaícesMX, creemos en el poder de las alianzas para construir un futuro más sostenible. Trabajamos de la mano con pequeños productores locales que comparten nuestros valores, garantizando ingredientes frescos y de alta calidad. Estas colaboraciones no solo impulsan la economía regional, sino que también refuerzan prácticas agrícolas responsables, ayudando a preservar nuestro planeta mientras llevamos lo mejor de nuestras raíces a tu mesa.`,
    logo: "/assets/nosotros10.webp",
  },
  "Semillero de oportunidades": {
    text: `En RaícesMX, vemos la alimentación como un motor de cambio social. Nuestro semillero de oportunidades busca transformar vidas a través del empleo y la formación profesional en comunidades necesitadas. Promovemos el desarrollo de habilidades, creando puentes hacia un futuro lleno de posibilidades. Cada comida que compartes con nosotros contribuye a una cadena de impacto positivo, donde juntos sembramos bienestar y cosechamos esperanza.`,
    logo: "/assets/nosotros30.webp",
  },
};

const Nosotros = () => {
  const [activeSection, setActiveSection] = useState("Nuestras Raíces");

  const integrantes = [
    { nombre: "Maria Fernanda", img: "/assets/nosotros-maf.webp" },
    { nombre: "Jesús Duerto", img: "/assets/nosotros-jesus.webp" },
    { nombre: "Christian Rodríguez", img: "/assets/nosotros-chris.webp" },
    { nombre: "David Rojas", img: "/assets/nosotros-david.webp" },
    { nombre: "Félix Peñaloza", img: "/assets/nosotros-felix.webp" },
    { nombre: "Alberto Villanueva", img: "/assets/nosotros-alberto.webp" },
  ];

  return (
    <main className="nosotros-main">
      <div className="nosotros-text-image">
        <div className="nosotros-about-img-container">
          <img
            src="/assets/sobrenosotrosimg.webp"
            alt="Imagen de comida"
            className="nosotros-responsive-image"
            loading="lazy"
          />
          <div className="nosotros-image-text">Sobre RaícesMX</div>
        </div>
        <div className="nosotros-menu">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className={`nosotros-listmenu ${
                activeSection === section ? "nosotros-active" : ""
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
      <hr className="nosotros-divide" />
      <div className="nosotros-about-section-2">
        <div className="nosotros-about-textcontainer">
          <div className="nosotros-about-backgroundtextcolor">
            <p className="nosotros-about-text-1">{sections[activeSection].text}</p>
          </div>
        </div>
        <div className="nosotros-about-logo">
          <img src={sections[activeSection].logo} alt="Logo RaícesMX" loading="lazy" />
        </div>
      </div>
      <div className="nosotros-integrantes">
        <h2 className="nosotros-integrantes-title">Integrantes</h2>
        <div className="nosotros-integrantes-list">
          {integrantes.map((integrante, index) => (
            <div key={index} className="nosotros-integrante">
              <img
                src={integrante.img}
                alt={`Foto de ${integrante.nombre}`}
                className="nosotros-integrante-img"
                loading="lazy"
              />
              <p className="nosotros-integrante-nombre">{integrante.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
