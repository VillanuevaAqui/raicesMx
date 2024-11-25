// Initialize a new ItemsController with currentId set to 0

import { ProductsController } from "./productsController.js";


// Initialize a new ItemsController with currentId set to 0
const productsController = new ProductsController(0);

// Select the New Item Form
const newProductForm = document.querySelector('#newProductForm');

// Add an 'onsubmit' event listener
newProductForm.addEventListener('submit', (event) => {
    // revent default action
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
    const price = newProductPrice.value

    /*
      



    */

    // Add the item to the ItemsController
    productsController.addProduct(name, desc, ingredients, imageUrl, price);

    console.log(productsController.products);
    // Clear the form
    newProductName.value = '';
    newProductDesc.value = '';    

});

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


});
});

const formDeleteProduct = document.querySelector("#remove-product");
formDeleteProduct.addEventListener("click", () => {

    generateList();

    const formDeleteBtn = document.querySelector("#delete-product");
    formDeleteBtn.addEventListener("click", () => {

        const index = getValue();
        productsController.removeProduct(index);

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
        const nameGet = newProductName.value;
        const descGet = newProductDesc.value;
        const ingredientsGet = newProductIngredients.value;
        const imageUrlGet = newProductImageUrl.value;
        const priceGet = newProductPrice.value

        productsController.updateProduct(index, {name: nameGet, desc: descGet, ingredients: ingredientsGet, imageUrl: imageUrlGet, price: priceGet});
        console.log(productsController.products)
    });


});


function getValue () {

    const selectElement = document.querySelector("#select-form")
    const selectValue = parseInt(selectElement.value);
    console.log(selectValue)
    console.log(parseInt(selectValue));
    return selectValue;
}

function generateList (){
    
    const containerSection = document.querySelector("#select-form");

    for (let i = 0; i < productsController.products.length; i ++){

        const htmlText = `<option value = "${productsController.products[i].id}">${productsController.products[i].name}</option>`;
        containerSection.innerHTML += htmlText;
    }
}
