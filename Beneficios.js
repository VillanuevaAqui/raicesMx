const MAIN_CONTAINER = document.querySelector("main");

const BENEFITS = [{
    title: "Atención a nutricionistas",
    description: "Lorem",
    image: "https://placehold.co/314x314" 
},
{
    title: "Personaliza tu menú",
    description: "Lorem",
    image: "https://placehold.co/314x314"
}];


function createElement(benefit) {

    const wall = document.createElement("div");
    wall.classList.add("wall");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = benefit.image;

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const title = document.createElement("h3");
    title.setAttribute("id", "title");
    title.textContent = benefit.title;

    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "paragraph");
    paragraph.textContent = benefit.description;

    descriptionContainer.append(title, paragraph);
    imgContainer.append(img)
    wall.append(imgContainer, descriptionContainer);
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