import "./Menu-card.css";
import React from 'react'



const MenuCard = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
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
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="assets/Chilaquiles-y-Huevos.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-sm-block d-md-block pp-carrusel-card">
            <h5 className="h2MCT-carrusel pp-title-carrusel">Desayuno</h5>
            <p className="h2MCT-carrusel h2MCT-carrusel-sub">Despierta a lo mexicano con chilaquiles llenos de sabor🌶️</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/Ceviche.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-sm-block d-md-block">
            <h5 className="h2MCT-carrusel pp-title-carrusel">Comida</h5>
            <p className="h2MCT-carrusel h2MCT-carrusel-sub">Ceviche fresco, limón vibrante, mariscos tiernos. ¡Explosión marina irresistible! 🌊</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/Huevo.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-sm-block d-md-block">
            <h5 className="h2MCT-carrusel pp-title-carrusel">Cena</h5>
            <p className="h2MCT-carrusel h2MCT-carrusel-sub">Omelette esponjoso, queso cremoso, espinacas frescas. ¡Explosión de sabor! 🔥</p>
          </div>
        </div>
      </div>

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
  );
};

export default MenuCard;
