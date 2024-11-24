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



