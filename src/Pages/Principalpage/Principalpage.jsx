import './PrincipalPage.css'

// SECCIÓN DE BIENVENIDA/MAIN
const Main = () => (
  <main className="main">
    <div className="pp-MainContainer">
      <img className="pp-background-image" src="/assets/Pozole.webp" alt="Olla de pozole rojo" />
      <div className="pp-MainContainerText">
        <h1 className="h1MCT">Platillos exquisitos</h1>
        <h2 className="h2MCT">TODOS LOS DÍAS</h2>
      </div>
      <div className="pp-MainContainerButtons">
        <a href="#" className="button"><strong>Suscríbete</strong></a>
        <a href="#" className="button"><strong>Menú a domicilio</strong></a>
      </div>
    </div>
  </main>
);

// SEGUNDO CONTENEDOR: MENÚS DEL DÍA
const MenuSection = () => (
  <section className="pp-SecundaryContainer">
    <h1 className="pp-SecundaryContainerTitle">Menús del día</h1>
    <section className="pp-menusContainer">
      {[1, 2, 3].map((menuNumber) => (
        <div id={`carouselMenu${menuNumber}`} className="pp-carousel-slide" key={menuNumber}>
          <div className="carousel-indicators">
            {[0, 1, 2].map((slide) => (
              <button
                type="button"
                data-bs-target={`#carouselMenu${menuNumber}`}
                data-bs-slide-to={slide}
                className={slide === 0 ? 'active' : ''}
                aria-current={slide === 0 ? 'true' : undefined}
                aria-label={`Slide ${slide + 1}`}
                key={slide}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`/assets/Menu${menuNumber}.webp`} className="pp-d-block w-100" alt={`Menu ${menuNumber}`} />
              <br /><br />
              <div className="pp-carousel card-body">
                <h5 className="pp-menuTime">MENÚ {menuNumber}</h5>
                <ul className="pp-menuText">
                  <li>Desayuno: Descripción {menuNumber}</li>
                  <li>Comida: Descripción {menuNumber}</li>
                  <li>Cena: Descripción {menuNumber}</li>
                </ul>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carouselMenu${menuNumber}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carouselMenu${menuNumber}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ))}
    </section>
  </section>
);

// TERCER CONTENEDOR: SUSCRÍBETE Y BENEFICIOS
const SubscribeSection = () => (
  <section className="terciaryContainer">
    <div className="terciaryContainerButton">
      <button className="terciaryContainerBtn">
        <a href="#">
          <h1 className="h1C3">¡Suscríbete</h1>
          <h2 className="h2C3">y obtén MÁS beneficios!</h2>
        </a>
      </button>
    </div>
    <section className="benefits">
      {["Nutricionista", "Seleccionar alimentos"].map((benefit, index) => (
        <div className="pp-cardC3" key={index}>
          <img className="pp-cardImg" src={`/assets/${benefit}.webp`} alt={benefit} />
          <h2 className="pp-cardTitle">{benefit}</h2>
          <p className="pp-cardText">Descripción del beneficio {index + 1}</p>
        </div>
      ))}
    </section>
    <div className="terciaryContainerBtn1">
      <button className="btn2C3">
        <a href="#">
          <p>Conoce más</p>
        </a>
      </button>
    </div>
  </section>
);

// CUARTO CONTENEDOR: TESTIMONIOS
const Testimonials = () => (
  <section className="pp-testimonio">
    <div className="foto">
      <img className="pp-user" src="/assets/Usuario.webp" alt="Usuario" />
    </div>
    <div className="pp-comentarioStarRating">
      <h2>Alberto Villanueva</h2>
      <br />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <p className="pp-comentario">
        El servicio a domicilio de la página es increíble, me han ayudado a poder
        tener una alimentación más saludable.
      </p>
    </div>
  </section>
);

// QUINTO CONTENEDOR: NUESTRO COMPROMISO
const Commitment = () => (
  <section className="Container5">
    <div className="Container5Button">
      <button className="terciaryContainerBtn">
        <a href="#">
          <h1 className="h1C3">¡NUESTRO COMPROMISO</h1>
          <h2 className="h2C3">es con México!</h2>
        </a>
      </button>
    </div>
    <section className="nuestroCompromiso">
      <div className="nuestroCompromisSection">
        {["Nutricionista.webp", "Traste de comida.webp", "Aceite de cocina.webp"].map((src, index) => (
          <div className="commitment-NC" key={index}>
            <img className="imageNC" src={`/assets/${src}`} alt={src.replace(/\.webp/, '')} />
            <p className="textNC"><strong>{["Donación de comida", "Reutilizamos tus tuppers", "Reutilización aceites"][index]}</strong></p>
          </div>
        ))}
      </div>
    </section>
  </section>
);

// COMPONENTE PRINCIPAL
const PrincipalPage = () => (
  <>
    <Main />
    <MenuSection />
    <SubscribeSection />
    <Testimonials />
    <Commitment />
  </>
);

export default PrincipalPage;
