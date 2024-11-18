//!================CONFIGURACIÓN INICIAL================*/
// Espera a que el contenido de la página cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones del menú (los que tienen la clase 'listmenu')
    const buttons = document.querySelectorAll('.listmenu');

    // Selecciona el contenedor donde se mostrará el texto dinámico al hacer clic en los botones
    const aboutTextContainer = document.querySelector('.about-textcontainer');

    // Selecciona la imagen del logo que se cambiará según la sección activa
    const logo = document.querySelector('.about-logo img');

//!================CONTENIDO DE LAS SECCIONES================*/
    // Define el contenido que se mostrará para cada sección (texto y logo correspondientes)
    const sections = {
        "Nuestras Raíces": {
            // Texto que aparece al seleccionar "Nuestras Raíces"
            text: `<p class="about-text-1">En RaícesMX, estamos comprometidos en hacer la vida más sencilla para personas con agendas ocupadas que buscan opciones de alimentación nutritivas y convenientes. Nuestro servicio ofrece comidas frescas y balanceadas, con un toque de energía y sabor, sin sacrificar tiempo ni calidad. Nos especializamos en brindar una experiencia personalizada que combina nutrición, bienestar y sostenibilidad. Diseñamos cada entrega pensando en tu salud y en el cuidado del planeta, asegurándonos de ser una opción confiable y accesible para todos aquellos que desean mejorar sus hábitos alimenticios de manera práctica y responsable.</p>`,
            // Ruta del logo para "Nuestras Raíces"
            logo: "./src/Logo RaícesMX.svg"
        },
        "Alianzas responsables": {
            // Texto que aparece al seleccionar "Alianzas responsables"
            text: `<p class="about-text-1">En RaícesMX, creemos en el poder de las alianzas para construir un futuro más sostenible. Trabajamos de la mano con pequeños productores locales que comparten nuestros valores, garantizando ingredientes frescos y de alta calidad. Estas colaboraciones no solo impulsan la economía regional, sino que también refuerzan prácticas agrícolas responsables, ayudando a preservar nuestro planeta mientras llevamos lo mejor de nuestras raíces a tu mesa.</p>`,
            // Ruta del logo para "Alianzas responsables"
            logo: "./src/Logo RaícesMX.svg"
        },
        "Semillero de oportunidades": {
            // Texto que aparece al seleccionar "Semillero de oportunidades"
            text: `<p class="about-text-1">En RaícesMX, vemos la alimentación como un motor de cambio social. Nuestro semillero de oportunidades busca transformar vidas a través del empleo y la formación profesional en comunidades necesitadas. Promovemos el desarrollo de habilidades, creando puentes hacia un futuro lleno de posibilidades. Cada comida que compartes con nosotros contribuye a una cadena de impacto positivo, donde juntos sembramos bienestar y cosechamos esperanza.</p>`,
            // Ruta del logo para "Semillero de oportunidades"
            logo: "./src/Logo RaícesMX.svg"
        }
    };

//!================CONFIGURACIÓN INICIAL DE LA PÁGINA================/
    // Nombre de la sección que debe aparecer por defecto al cargar la página
    const defaultSection = "Nuestras Raíces";

    // Muestra el contenido (texto) de la sección por defecto en el contenedor
    aboutTextContainer.innerHTML = `
        <div class="about-backgroundtextcolor">
            ${sections[defaultSection].text}
        </div>
    `;

    // Cambia el logo al correspondiente de la sección por defecto
    logo.src = sections[defaultSection].logo;

    // Encuentra el botón correspondiente a la sección por defecto
    const defaultButton = Array.from(buttons).find(button => button.textContent === defaultSection);

    // Si el botón de la sección por defecto existe, añade la clase 'active' para resaltarlo
    if (defaultButton) {
        defaultButton.classList.add('active');
    }

//!================INTERACTIVIDAD DE LOS BOTONES================*/
    // Recorre todos los botones y añade un evento de clic a cada uno
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Cambia el texto dinámico según la sección asociada al botón
            aboutTextContainer.innerHTML = `
                <div class="about-backgroundtextcolor">
                    ${sections[button.textContent].text}
                </div>
            `;

            // Cambia el logo dinámico según la sección asociada al botón
            logo.src = sections[button.textContent].logo;

            // Quita la clase 'active' de todos los botones para que ninguno quede resaltado
            buttons.forEach(btn => btn.classList.remove('active'));

            // Añade la clase 'active' al botón que fue clicado para resaltarlo
            button.classList.add('active');
        });
    });
});
