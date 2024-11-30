document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.listmenu'); // Todos los botones
    const aboutTextContainer = document.querySelector('.about-textcontainer'); // Contenedor del texto dinámico
    const logo = document.querySelector('.about-logo img'); // Imagen del logo para cambiar dinámicamente

    // Contenido dinámico para cada sección
    const sections = {
        "Nuestras Raíces": {
            text: `<p class="about-text-1">En RaícesMX, estamos comprometidos en hacer la vida más sencilla para personas con agendas ocupadas que buscan opciones de alimentación nutritivas y convenientes. Nuestro servicio ofrece comidas frescas y balanceadas, con un toque de energía y sabor, sin sacrificar tiempo ni calidad. Nos especializamos en brindar una experiencia personalizada que combina nutrición, bienestar y sostenibilidad. Diseñamos cada entrega pensando en tu salud y en el cuidado del planeta, asegurándonos de ser una opción confiable y accesible para todos aquellos que desean mejorar sus hábitos alimenticios de manera práctica y responsable.</p>`,
            logo: "../src/nosotros10.png"
        },
        "Alianzas responsables": {
            text: `<p class="about-text-1">En RaícesMX, creemos en el poder de las alianzas para construir un futuro más sostenible. Trabajamos de la mano con pequeños productores locales que comparten nuestros valores, garantizando ingredientes frescos y de alta calidad. Estas colaboraciones no solo impulsan la economía regional, sino que también refuerzan prácticas agrícolas responsables, ayudando a preservar nuestro planeta mientras llevamos lo mejor de nuestras raíces a tu mesa.</p>`,
            logo: "../src/nosotros20.png"
        },
        "Semillero de oportunidades": {
            text: `<p class="about-text-1">En RaícesMX, vemos la alimentación como un motor de cambio social. Nuestro semillero de oportunidades busca transformar vidas a través del empleo y la formación profesional en comunidades necesitadas. Promovemos el desarrollo de habilidades, creando puentes hacia un futuro lleno de posibilidades. Cada comida que compartes con nosotros contribuye a una cadena de impacto positivo, donde juntos sembramos bienestar y cosechamos esperanza.</p>`,
            logo: "../src/nosotros30.png"
        }
    };

    // Resaltar el botón "Nuestras Raíces" por defecto al cargar la página
    const defaultSection = "Nuestras Raíces";
    aboutTextContainer.innerHTML = `
        <div class="about-backgroundtextcolor">
            ${sections[defaultSection].text}
        </div>
    `;
    logo.src = sections[defaultSection].logo;

    // Establecer el estado activo en el botón por defecto
    const defaultButton = Array.from(buttons).find(button => button.textContent === defaultSection);
    if (defaultButton) {
        defaultButton.classList.add('active');
    }

    // Añadir eventos a los botones
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Cambia el contenido dinámico
            aboutTextContainer.innerHTML = `
                <div class="about-backgroundtextcolor">
                    ${sections[button.textContent].text}
                </div>
            `;
            // Cambia el logo dinámico
            logo.src = sections[button.textContent].logo;

            // Remover la clase "active" de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));

            // Añadir la clase "active" al botón actual
            button.classList.add('active');
        });
    });
});