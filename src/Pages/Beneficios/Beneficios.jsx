import "./Beneficios.css"


const BENEFITS_GOLD = [
  {
    title: "Envíos Gratis",
    description: 
<<<<<<< HEAD
    "Al suscribirte, todos tus envíos serán completamente gratis, sin importar el monto de tu compra o tu ubicación. ¡Así, puedes comprar lo que quieras sin preocuparte por los gastos adicionales!",
    image: "assets/FreeDelivery2.webp"
=======
    "Al suscribirte, todos tus envíos serán completamente gratis, sin importar el monto de tu compra o tu ubicación. ¡Así, puedes comprar lo que quieras sin preocuparte por los gastos adicionales! Además, disfrutarás de ofertas exclusivas, acceso anticipado a nuevos productos y una experiencia de compra más rápida y cómoda.",
    image: "assets/Envios-gratis.webp"
>>>>>>> 33040cf7c416f530a615f739e36fcea7ea67400b
  },
  {
    title: "Descuentos exclusivos",
    description: 
<<<<<<< HEAD
    "disfrutarás de descuentos especiales en productos seleccionados. Accede a precios reducidos y promociones únicas que no están disponibles para el público general.",
    image: "assets/ClienteFeliz.png"
=======
    "Disfrutarás de descuentos especiales en productos seleccionados, con precios exclusivos solo para suscriptores. Accede a ofertas especiales, promociones únicas y precios reducidos en una amplia variedad de artículos, que no están disponibles para el público general. Además, recibirás alertas sobre las mejores ofertas antes que nadie, para que siempre puedas aprovechar las mejores oportunidades.",
    image: "assets/sello-circular-rojo-palabra-exclusivo.webp"
>>>>>>> 33040cf7c416f530a615f739e36fcea7ea67400b
  },
  {
    title: "Personaliza tu menú",
    description:
<<<<<<< HEAD
      "tienen la posibilidad de elegir entre una amplia gama de alimentos saludables y nutritivos, los cuales se entregarán de manera regular y en porciones que se alinean con su dieta personalizada. Además, el servicio ofrece flexibilidad para modificar el menú a lo largo del tiempo, ya sea para incorporar nuevos productos o ajustar las cantidades según los cambios en las necesidades del cliente.",
    image: "assets/PersonalizarMenu.png"
=======
      "Tienen la posibilidad de elegir entre una amplia gama de alimentos saludables y nutritivos, los cuales se entregarán de manera regular y en porciones que se alinean con su dieta personalizada. Además, el servicio ofrece flexibilidad para modificar el menú a lo largo del tiempo, ya sea para incorporar nuevos productos o ajustar las cantidades según los cambios en las necesidades del cliente.",
    image: "assets/Fotos-RaícesMX-_1_.webp"
>>>>>>> 33040cf7c416f530a615f739e36fcea7ea67400b
  }
];

const BENEFITS_PREMIUM = [
  {
    title: "Soporte y atención prioritaria",
    description: 
<<<<<<< HEAD
    "tendrás acceso inmediato a nuestro equipo de soporte, siempre a tu disposición. Serás atendido con prioridad, lo que significa tiempos de respuesta más rápidos y una solución más eficiente a cualquier consulta o inconveniente",
    image: "assets/Soporte.png"
=======
    "Tendrás acceso inmediato a nuestro equipo de soporte, siempre disponible para ayudarte en lo que necesites. Como suscriptor, serás atendido con prioridad, lo que significa tiempos de respuesta más rápidos y una solución más eficiente a cualquier consulta o inconveniente que surja. Ya sea que necesites asistencia con un producto, seguimiento de tu pedido o cualquier otra consulta, nuestro equipo estará listo para brindarte una atención personalizada y ágil. ¡Queremos que tu experiencia de compra sea lo más fácil y satisfactoria posible!",
    image: "assets/Atencion-prioritaria.webp"
>>>>>>> 33040cf7c416f530a615f739e36fcea7ea67400b
  },
  {
    title: "Atención de nutricionistas",
    description:
      "Es un servicio exclusivo diseñado para ofrecer asesoramiento personalizado de nutricionistas profesionales a los clientes que buscan mejorar su alimentación y bienestar. Este beneficio está dirigido a aquellos que desean obtener una orientación más especializada sobre sus necesidades nutricionales, adaptadas a sus objetivos específicos (como pérdida de peso, ganancia muscular, mejora de la digestión, entre otros).",
    image: "assets/Fotos-RaícesMX.webp",
  }
]

const Beneficios = () => {
  return (
    <main className="benefits-main">
      <TitlePage />
      {BENEFITS_GOLD.map((benefit, index) => (
        <BenefitElement key={index} benefit={benefit} />
      ))}
      <div className="benefits-card-title">
        <h2 className="benefits-title benefits-title-card">¡Beneficios de la suscripción PREMIUM!</h2>
      </div>
      {BENEFITS_PREMIUM.map((benefit, index) => (
        <BenefitElement key={index} benefit={benefit} />
      ))}
      
    </main>
  );
};

const TitlePage = () => {
  return (
    <div className="benefits-card-title">
      <h2 className="benefits-title benefits-title-card">¡Beneficios de la suscripción GOLD!</h2>
    </div>
  );
};

const BenefitElement = ({ benefit }) => {
  return (
    <div className="benefits-wall">
      <div className="benefits-container-card">
        <div className="benefits-img-container">
          <img className="benefits-img-benefit" src={benefit.image} alt={benefit.title} />
        </div>
        <div className="benefits-description-container">
          <h3 className="benefits-title-card">{benefit.title}</h3>
          <p className="benefits-paragraph-card">{benefit.description}</p>
        </div>
      </div>
    </div>
  );
};



export default Beneficios;