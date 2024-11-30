import "./Menu-card.css";
import React from 'react'



const MenuCard = () => {
  return (
  
  <section className="menusContainer">
      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel-slide">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="/assets/Chilaquiles-y-Huevos.webp"
              className="d-block w-100"
              alt="Chilaquiles verdes con huevo"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="menuTime">MENÚ 1 | Desayuno</h5>
              <p className="menuText">Chilaquiles verdes con huevo</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="/assets/Ceviche.webp"
              className="d-block w-100"
              alt="Ceviche"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="menuTime">MENÚ 1 | Comida</h5>
              <p className="menuText">Ceviche</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="/assets/Huevo.webp"
              className="d-block w-100"
              alt="Omelette con espinacas"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="menuTime">MENÚ 1 | Cena</h5>
              <p className="menuText">Omelette con espinacas</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default MenuCard;
