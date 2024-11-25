// Initialize a new ItemsController with currentId set to 0

import { ProductsController } from "./productsController.js";


// Initialize a new ItemsController with currentId set to 0
const productsController = new ProductsController();



const addProductBtn = document.querySelector('#addProduct');
addProductBtn.addEventListener('click', (e) => {
    // Select the New Item Form
    const newProductForm = document.querySelector('#newProductForm');

    // Add an 'onsubmit' event listener
    newProductForm.addEventListener('submit', (event) => {
        // revent default action
        console.log(productsController.products);
        console.log("Test antes de añadir\n");
        event.preventDefault();
        // Select the inputs
        const newProductName = document.querySelector('#name');
        const newProductDesc = document.querySelector('#desc');
        const newProductIngredients = document.querySelector('#ingredients');
        const newProductImageUrl = document.querySelector('#image');
        const newProductPrice = document.querySelector('#price');


        // Get the values of the inputs
        const name = newProductName.value;
        const desc = newProductDesc.value;
        const ingredients = newProductIngredients.value;
        const imageUrl = newProductImageUrl.value;
        const price = newProductPrice.value;

        /*
          
    
    
    
        */

        // Add the item to the ItemsController
        productsController.addProduct(name, desc, ingredients, imageUrl, price);

        const lastAddedProduct = productsController.products[productsController.products.length - 1];
        addProductCard(lastAddedProduct);

        // Clear the form
        newProductName.value = '';
        newProductDesc.value = '';
        newProductIngredients.value = '';
        newProductImageUrl.value = '';
        newProductPrice.value = '';
        console.log('Test después de añadir\n');
        console.log(productsController.products);
    });
})

const newProductForm = document.querySelector('#newProductForm');

// Add an 'onsubmit' event listener
newProductForm.addEventListener('submit', (event) => {
    // revent default action
    console.log(productsController.products);
    console.log("Test antes de añadir\n");
    event.preventDefault();
    // Select the inputs
    const newProductName = document.querySelector('#name');
    const newProductDesc = document.querySelector('#desc');
    const newProductIngredients = document.querySelector('#ingredients');
    const newProductImageUrl = document.querySelector('#image');
    const newProductPrice = document.querySelector('#price');


    // Get the values of the inputs
    const name = newProductName.value;
    const desc = newProductDesc.value;
    const ingredients = newProductIngredients.value;
    const imageUrl = newProductImageUrl.value;
    const price = newProductPrice.value;

    /*
      
 
 
 
    */

    // Add the item to the ItemsController
    productsController.addProduct(name, desc, ingredients, imageUrl, price);

    // const lastAddedProduct = productsController.products[productsController.products.length - 1];
    // addProductCard(lastAddedProduct);
    renderAllProductCards(); 
    // Clear the form
    newProductName.value = '';
    newProductDesc.value = '';
    newProductIngredients.value = '';
    newProductImageUrl.value = '';
    newProductPrice.value = '';
    console.log('Test después de añadir\n');
    console.log(productsController.products);
});
//SEGUNDO INTENTO 

// Select the New Item Form
// const submitBtn = document.querySelector('#submit');

// // Add an 'onsubmit' event listener
// submitBtn.addEventListener('click', (event) => {
//     // revent default action
//     // event.preventDefault();
//     console.log(productsController.products);
//     console.log("Test antes de añadir\n");
//     // Select the inputs
//     const newProductName = document.querySelector('#name');
//     const newProductDesc = document.querySelector('#desc');
//     const newProductIngredients = document.querySelector('#ingredients');
//     const newProductImageUrl = document.querySelector('#image');
//     const newProductPrice = document.querySelector('#price');


//     // Get the values of the inputs
//     const name = newProductName.value;
//     const desc = newProductDesc.value;
//     const ingredients = newProductIngredients.value;
//     const imageUrl = newProductImageUrl.value;
//     const price = newProductPrice.value;

//     /*




//     */

//     // Add the item to the ItemsController
//     productsController.addProduct(name, desc, ingredients, imageUrl, price);

//     // Clear the form
//     newProductName.value = '';
//     newProductDesc.value = '';
//     console.log('Test después de añadir\n');
//     console.log(productsController.products);
// });





//Primer intento

/*const buttonDeleteAll = document.querySelector("#delete-products");
buttonDeleteAll.addEventListener("click", () => {

    productsController.removeAllProducts();
    console.log(productsController.products);


});*/

//2do intento

/* function deleteAll () {

    productsController.removeAllProducts();
    console.log(productsController.products);

}
*/

// 3er intento

const formDeleteAll = document.querySelector("#remove-product-all");
formDeleteAll.addEventListener("click", () => {

    const buttonDeleteAll2 = document.querySelector("#delete-products");
    buttonDeleteAll2.addEventListener("click", () => {

        productsController.removeAllProducts();
        console.log(productsController.products);
        renderAllProductCards(); 

    });
});

const formDeleteProduct = document.querySelector("#remove-product");
formDeleteProduct.addEventListener("click", () => {

    generateList();

    const formDeleteBtn = document.querySelector("#delete-product");
    formDeleteBtn.addEventListener("click", () => {

        const index = getValue();
        productsController.removeProduct(index);
        renderAllProductCards(); 
    });


});

const formUpdateProduct = document.querySelector("#update-product");
formUpdateProduct.addEventListener("click", () => {

    generateList();

    const formUpdateBtn = document.querySelector("#form-update-product");
    formUpdateBtn.addEventListener("click", () => {

        const index = getValue();

        // Select the inputs
        const newProductName = document.querySelector('#name');
        const newProductDesc = document.querySelector('#desc');
        const newProductIngredients = document.querySelector('#ingredients');
        const newProductImageUrl = document.querySelector('#image');
        const newProductPrice = document.querySelector('#price');


        // Get the values of the inputs
        const nameGet = newProductName.value.trim();
        const descGet = newProductDesc.value.trim();
        const ingredientsGet = newProductIngredients.value.trim();
        const imageUrlGet = newProductImageUrl.value.trim();
        const priceGet = newProductPrice.value.trim();

        const updatedProduct = {};

        if (nameGet) updatedProduct.name = nameGet;
        if (descGet) updatedProduct.desc = descGet;
        if (ingredientsGet) updatedProduct.ingredients = ingredientsGet;
        if (imageUrlGet) updatedProduct.imageUrl = imageUrlGet;
        if (priceGet) updatedProduct.price = priceGet;

        // Actualiza el producto solo si hay campos válidos
        if (Object.keys(updatedProduct).length > 0) {
            productsController.updateProduct(index, updatedProduct);
        } else {
            console.log("No se actualizó porque todos los campos están vacíos");
        }
        renderAllProductCards(); 
        // productsController.updateProduct(index, {name: nameGet, desc: descGet, ingredients: ingredientsGet, imageUrl: imageUrlGet, price: priceGet});
        console.log(productsController.products)
    });
});


function getValue() {

    const selectElement = document.querySelector("#select-form")
    const selectValue = parseInt(selectElement.value);
    console.log(selectValue)
    console.log(parseInt(selectValue));
    return selectValue;
}

function generateList() {

    const containerSection = document.querySelector("#select-form");

    for (let i = 0; i < productsController.products.length; i++) {

        const htmlText = `<option value = "${productsController.products[i].id}">${productsController.products[i].name}</option>`;
        containerSection.innerHTML += htmlText;
    }
}






// Function to add a product card
function addProductCard(product) {
    const productHTML = `
        <div class="card">
            <img src="${product.imageURL}" width="200" alt="product image">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.desc}</p>
                <p class="card-text"><strong>Ingredients:</strong> ${product.ingredients}</p>
                <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                <a href="#" class="btn-product">Add</a>
            </div>
        </div>`;
    const productsContainer = document.getElementById("list-products");
    productsContainer.innerHTML += productHTML;
}

function loadCardsListFromProductsController() {
    for (let i = 0, size = productsController.products.length; i < size; i++) {
        const product = productsController.products[i];
        addProductCard(product);
    }
}

function renderAllProductCards() {
    const productsContainer = document.getElementById("list-products");
    productsContainer.innerHTML = ''; // Limpiar las tarjetas existentes

    // if (productsController.products.length > 0) {
    //     const productsTitle = document.createElement('h2');
    //     productsTitle.textContent = 'Productos';
    //     productsTitle.classList.add('products-title');
    //     productsTitle.style.marginBottom = '1rem'; // Añade margen para separación
    //     productsContainer.appendChild(productsTitle);
    // }
    // Renderizar todas las tarjetas actuales
    for (const example of productsController.examples) {
        addProductCard(example);
    }
    for (const product of productsController.products) {
        addProductCard(product);
    }
}

// function renderExamples(){
//     for (const example of productsController.examples) {
//         addProductCard(example);
//     }
// }

productsController.loadProductsFromLocalStorage();
loadCardsListFromProductsController();