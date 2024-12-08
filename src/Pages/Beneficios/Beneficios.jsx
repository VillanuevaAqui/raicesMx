import "./Beneficios.css"

const BENEFITS = [
    {
      title: "Atención de nutricionistas",
      description:
        "es un servicio exclusivo diseñado para ofrecer asesoramiento personalizado de nutricionistas profesionales a los clientes que buscan mejorar su alimentación y bienestar. Este beneficio está dirigido a aquellos que desean obtener una orientación más especializada sobre sus necesidades nutricionales, adaptadas a sus objetivos específicos (como pérdida de peso, ganancia muscular, mejora de la digestión, entre otros).",
      image: "assets/Fotos-RaícesMX.webp",
    },
    {
      title: "Personaliza tu menú",
      description:
        "tienen la posibilidad de elegir entre una amplia gama de alimentos saludables y nutritivos, los cuales se entregarán de manera regular y en porciones que se alinean con su dieta personalizada. Además, el servicio ofrece flexibilidad para modificar el menú a lo largo del tiempo, ya sea para incorporar nuevos productos o ajustar las cantidades según los cambios en las necesidades del cliente.",
      image: "assets/Fotos-RaícesMX-_1_.webp",
    },
  ];
  
  const Beneficios = () => {
    return (
      <main className="main">
        <TitlePage />
        {BENEFITS.map((benefit, index) => (
          <BenefitElement key={index} benefit={benefit} />
        ))}
      </main>
    );
  };
  
  const TitlePage = () => {
    return (
      <div className="benefit-card-title">
        <h2 className="title title-card">Beneficios de la suscripción!!!</h2>
      </div>
    );
  };
  
  const BenefitElement = ({ benefit }) => {
    return (
      <div className="wall">
        <div className="container-card">
          <div className="img-container">
            <img className="img-benefit" src={benefit.image} alt={benefit.title} />
          </div>
          <div className="description-container">
            <h3 className="title-card">{benefit.title}</h3>
            <p className="paragraph-card">{benefit.description}</p>
          </div>
        </div>
      </div>
    );
  };

export default Beneficios;