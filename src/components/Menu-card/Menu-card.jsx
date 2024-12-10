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
          <img src="assets/Huevo.webp" className="d-block w-100" alt="..." />
          <div className=" carousel-caption d-none d-md-block">
            <h5 className="h2MCT h2MCT-carrusel">MENÚ 1 | Desayuno</h5>
            <ul>
              <li className="h2MCT h2MCT-carrusel">Desayuno: Descripción </li>
                <li className="h2MCT h2MCT-carrusel">Comida: Descripción </li>
                <li className="h2MCT h2MCT-carrusel">Cena: Descripción </li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/Ceviche.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>MENÚ | Comida</h5>
            <p>Ceviche.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="assets/Huevo.webp" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>MENÚ | Cena</h5>
            <p>Omelette con espinacas</p>
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
