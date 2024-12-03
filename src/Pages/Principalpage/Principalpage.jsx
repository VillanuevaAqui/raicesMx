import React from "react";
import "./Principalpage.css";

const Principalpage = () => {
  return (
    <div>
      <main className="main">
        <div className="MainContainer">
          <img
            className="background-image"
            src="/assets/Pozole.webp"
            alt="Olla de pozole rojo"
          />
          <div className="MainContainer-content">
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
        </div>
      </main>

      <section className="SecundaryContainer">
        <h1 className="SecundaryContainertitle">Menús del día</h1>
        <section className="menusContainer">
          {/* Reutilizar componente para cada carrusel */}
        </section>
      </section>
    </div>
  );
};

export default Principalpage;
