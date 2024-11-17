const MAIN_CONTAINER = document.querySelector("main");

const BENEFITS = [{
    title: "Atención a nutricionistas",
    description: "es un servicio exclusivo diseñado para ofrecer asesoramiento personalizado de nutricionistas profesionales a los clientes que buscan mejorar su alimentación y bienestar. Este beneficio está dirigido a aquellos que desean obtener una orientación más especializada sobre sus necesidades nutricionales, adaptadas a sus objetivos específicos (como pérdida de peso, ganancia muscular, mejora de la digestión, entre otros).",
    image: "src/Fotos RaícesMX.png" 
},
{
    title: "Personaliza tu menú",
    description: "tienen la posibilidad de elegir entre una amplia gama de alimentos saludables y nutritivos, los cuales se entregarán de manera regular y en porciones que se alinean con su dieta personalizada. Además, el servicio ofrece flexibilidad para modificar el menú a lo largo del tiempo, ya sea para incorporar nuevos productos o ajustar las cantidades según los cambios en las necesidades del cliente.",
    image: "src/Fotos RaícesMX (1).png"
}];


function createElement(benefit) {

    const wall = document.createElement("div");
    wall.classList.add("wall");

    const containerCard = document.createElement("div");
    containerCard.classList.add("container-card");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.setAttribute("class", "img-benefit");
    img.src = benefit.image;

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const title = document.createElement("h3");
    title.setAttribute("class", "title-card");
    title.textContent = benefit.title;

    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "paragraph-card");
    paragraph.textContent = benefit.description;

    descriptionContainer.append(title, paragraph);
    imgContainer.append(img)

    containerCard.append(imgContainer, descriptionContainer);

    wall.append(containerCard);
    MAIN_CONTAINER.appendChild(wall);

}

function assingValues(benefit){

    const img = document.getElementById("img");
    img.src = benefit.image;

    const title = document.getElementById("title");
    title.textContent = benefit.title;

    const paragraph = document.getElementById("paragraph");
    paragraph.textContent = benefit.description;

}

function call(benefits){

    benefits.forEach(benefit => {

        createElement(benefit);
    });

}

call(BENEFITS)