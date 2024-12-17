import './PrincipalPage.css'
import MenuCard from '../../components/Menu-card/Menu-card';
import { Link } from 'react-router-dom';
import CustomizedRating from '../../components/Rating/CustomizedRating.jsx';


// SECCIÓN DE BIENVENIDA/MAIN
const Main = () => (
  <main className="pp-main">
    <div className="pp-MainContainer">
      <img className="pp-background-image" src="/assets/Pozole.webp" alt="Olla de pozole rojo" />
      <div className="pp-MainContainerText">
        <h1 className="h1MCT">Platillos exquisitos</h1>
        <h2 className="h2MCT">TODOS LOS DÍAS</h2>
      </div>
      <div className="pp-MainContainerButtons">
        <Link to="/beneficios" className='button'><strong>Suscríbete</strong></Link>
        <Link to="/menu" className='button'><strong>Menú a domicilio</strong></Link>
      </div>
    </div>
  </main>
);

// SEGUNDO CONTENEDOR: MENÚS DEL DÍA
const MenuSection = () => (
  <section className="pp-SecundaryContainer">
    <h2 className="pp-SecundaryContainerTitle">Menú del día</h2>
    {/* <section className="pp-menusContainer"> */}
    <MenuCard />
    {/* {[1, 2].map((menuNumber) => (
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
          {/* <button className="carousel-control-prev" type="button" data-bs-target={`#carouselMenu${menuNumber}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carouselMenu${menuNumber}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> }
        </div>
      ))} */}
    {/* </section> */}
  </section>
);

const arr = [
  {
    title: "Nutricionista",
    img: "/assets/Nutricionista.webp",
    description: `RaícesMX somos tu aliado para una alimentación saludable y personalizada.
                    Disfruta de planes nutricionales diseñados a tu medida, creados por nuestros expertos para
                    ayudarte a alcanzar tus objetivos de bienestar.`
  },
  {
    title: "Seleccionar alimentos",
    img: "/assets/Elegir alimentos.webp",
    description: `Con nuestros menús, come delicioso y saludable con RaícesMX. ¡Tú eliges los
                    ingredientes,
                    las porciones y los menús! Nuestro equipo te asesorará para que tus comidas sean
                    nutritivas y satisfactorias, adaptándose a tus gustos y necesidades alimentarias.`
  }
]
// TERCER CONTENEDOR: SUSCRÍBETE Y BENEFICIOS
const SubscribeSection = () => (
  <section className="terciaryContainer">
    <div className="terciaryContainerButton">
      <div className="terciaryContainerBtn">

        <Link to="/beneficios" style={{ textDecoration: 'none' }}>
          <h1 className="h1C3">¡Suscríbete</h1>
          <h2 className="h2C3">y obtén MÁS beneficios!</h2>
        </Link>

      </div>
    </div>
    <section className="pp-benefits">
      <div className='pp-benefits-container'>
        {arr.map((benefit, index) => (
          <div className="pp-cardC3" key={index}>
            <img className="pp-cardImg" src={benefit.img} alt={benefit} />
            <h2 className="pp-cardTitle">{benefit.title}</h2>
            <p className="pp-cardText">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="">
        <button className="btn2C3">
          <Link to="/beneficios" className="btn2C3text" style={{ textDecoration: 'none' }}>Conoce más
          </Link>
        </button>
      </div>
      
    </section>
  </section>
);

// CUARTO CONTENEDOR: TESTIMONIOS
const Testimonials = () => (
  <section className="pp-testimonio">

    <div className='testimonials-container'>

      <div className="foto">
        <img className="pp-user" src="assets/Usuario.webp" alt="Usuario" />
      </div>

      <div className="pp-comentarioStarRating">
        <h2 className='testimonio-name-user'>Alberto Villanueva</h2>
        <br />
        <link 
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <CustomizedRating />
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>

        <p className="pp-comentario">
          El servicio a domicilio de la página es increíble, me han ayudado a
          tener una alimentación más saludable y con opciones deliciosas. Me gusta que hay variedad en los menús y no me aburro de las opciones que ofrecen. ¡100% recomendado!
        </p>
      </div>
    </div>
  </section>
);

// QUINTO CONTENEDOR: NUESTRO COMPROMISO
const Commitment = () => (
  <section className="Container5">
    <div className="Container5Button">
      <div>
        <Link to="/nosotros" className='button' style={{ textDecoration: 'none' }}>
          <h2 className="h1C3">¡NUESTRO COMPROMISO</h2>
          <h2 className="h2C3">es con México!</h2>
        </Link>
      </div>
    </div>
    <section className="nuestroCompromiso">
      <div className="nuestroCompromisSection">
        {["Nutricionista.webp", "Traste-de-comida_1_.webp", "Aceite-de-cocina.webp"].map((src, index) => (
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
    <MenuSection /> {/* */}
    <SubscribeSection />
    <Testimonials />
    <Commitment />
  </>
);

export default PrincipalPage;
