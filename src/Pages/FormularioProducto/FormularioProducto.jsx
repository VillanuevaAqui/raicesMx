
import "./FormularioProducto.css"
import React, { useState } from 'react';
import ProductsController from "./productsController.js";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Validaciones del formulario
const validateForm = (name = "", desc = "", ingredients = "", imageUrl = "", price = "") => {
  let isValid = true;

  // Validar nombre del producto
  if (!name.trim() || name.length < 3 || name.length > 50) {
    alert("El nombre del producto debe tener entre 3 y 50 caracteres.");
    isValid = false;
  }

  // Validar descripción
  if (!desc.trim() || desc.length < 10 || desc.length > 300) {
    alert("La descripción debe tener entre 10 y 300 caracteres.");
    isValid = false;
  }

  // Validar ingredientes
  if (!ingredients.trim() || ingredients.length < 5) {
    alert("Los ingredientes deben tener al menos 5 caracteres.");
    isValid = false;
  }

  // Validar URL de imagen
  const fileInput = document.querySelector('#panelAdmin-image');
  const file = fileInput.files[0]; // Obtener el archivo seleccionado
  if (!file || file.type !== "image/png") {
    alert("Debe seleccionar una imagen en formato PNG.");
    isValid = false;
  }

  // Validar precio
  const priceValue = parseFloat(price);
  if (isNaN(priceValue) || priceValue <= 0) {
    alert("El precio debe ser un número mayor a 0.");
    isValid = false;
  }

  return isValid;
};


const handleImageChange = (event) => {
  const file = event.target.files[0]; // Obtener el archivo seleccionado
  if (file && file.type !== "image/png") {
    alert("Por favor, seleccione solo imágenes en formato PNG.");
    event.target.value = ""; // Limpia el campo si el archivo no es válido
  } else {
    console.log("Archivo válido:", file);
  }
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Logic implemented to manipulate the productsController class, with the key functions being addProductBtn, 
 *removeProductBtn, removeAllProductsBtn, and updateProductBtn. */

const productsController = new ProductsController;

function addProductBtn() {

  // Select the inputs
  const newProductName = document.querySelector('#panelAdmin-name');
  const newProductDesc = document.querySelector('#panelAdmin-desc');
  const newProductIngredients = document.querySelector('#panelAdmin-ingredients');
  const newProductImageUrl = document.querySelector('#panelAdmin-image');
  const newProductPrice = document.querySelector('#panelAdmin-price');

  // Get the values of the inputs
  const name = newProductName.value;
  const desc = newProductDesc.value;
  const ingredients = newProductIngredients.value;
  const imageUrl = newProductImageUrl.value;
  const price = newProductPrice.value;

  // llama validacion     
  if (!validateForm(name, desc, ingredients, imageUrl, price)) {
    console.log("Formulario inválido, no se enviaron los datos.");
    return; // Detener si la validación falla
  }

  //Si pasa la validacion 

  // Add the item to the ItemsController
  productsController.addProduct(name, desc, ingredients, imageUrl, price);

  // Clear the form
  newProductName.value = '';
  newProductDesc.value = '';
  console.log('Test después de añadir\n');
  console.log(productsController.products);

}

function removeAllProductsBtn() {

  productsController.removeAllProducts();
  console.log(productsController.products);

  console.log("Se borro todo mi loco")

}

function removeProductBtn() {

  const id = "#panelAdmin-select-form"
  const index = getValue(id);
  productsController.removeProduct(index);
  console.log(productsController.products)

}

function updateProductBtn() {

  const id = "#panelAdmin-select-form"
  const index = getValue(id);

  // Select the inputs
  const newProductName = document.querySelector('#panelAdmin-name');
  const newProductDesc = document.querySelector('#panelAdmin-desc');
  const newProductIngredients = document.querySelector('#panelAdmin-ingredients');
  const newProductImageUrl = document.querySelector('#panelAdmin-image');
  const newProductPrice = document.querySelector('#panelAdmin-price');


  // Get the values of the inputs
  const nameGet = newProductName.value.trim();
  const descGet = newProductDesc.value.trim();
  const ingredientsGet = newProductIngredients.value.trim();
  const imageUrlGet = newProductImageUrl.value.trim();
  const priceGet = newProductPrice.value.trim();

  // Validar los campos usando la función validateForm
  if (!validateForm(nameGet, descGet, ingredientsGet, imageUrlGet, priceGet)) {
    console.log("Formulario inválido, no se actualizó el producto.");
    return; // Detener la ejecución si la validación falla
  }

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

  // productsController.updateProduct(index, {name: nameGet, desc: descGet, ingredients: ingredientsGet, imageUrl: imageUrlGet, price: priceGet});
  console.log(productsController.products)

}

function getValue(id) {

  const selectElement = document.querySelector(id)
  const selectValue = parseInt(selectElement.value);
  return selectValue;
}

const handleSubmit = (e) => {
  e.preventDefault(); // Evita que el formulario se recargue por defecto

}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

const generateList = () => {

  return (
    <>
      {
        productsController.products.map((product, index) => (
          <option className="panelAdmin-select-option" key={index} value={product.id}>{product.name}</option>
        ))
      }
    </>
  );

}


function PanelAdministracion() {

  const [formContent, setFormContent] = useState(
    <div className="panelAdmin-form-remove-product">
      <h2 className="panelAdmin-title-form">Aqui se mostrarán las ordenes</h2>
      <select
        className="panelAdmin"
        id="panelAdmin-select-form"
      >
        {generateList()}
      </select>
    </div>);

  const orders = () => {
    setFormContent(
      <div className="panelAdmin-form-remove-product">
        <h2 className="panelAdmin-title-form">Ordenes</h2>
        <select
          class="panelAdmin-form-select"
          id="panelAdmin-select-form"
        >
          {generateList()}
        </select>
      </div>
    );
  };

  const generateFormAdd = () => {
    setFormContent(
      <div className="panelAdmin-form-add-product">
        <h2 className="panelAdmin-title-form">Añadir productos</h2>
        <form className="panelAdmin-form-add" id="panelAdmin-newProductForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="panelAdmin-name"
            className="panelAdmin-form-add-input"
            placeholder="Nombre del producto"
          />
          <textarea
            rows="4"
            cols="40"
            id="panelAdmin-desc"
            className="panelAdmin-form-add-input"
            placeholder="Descripcion"
          ></textarea>
          <textarea
            rows="4"
            id="panelAdmin-ingredients"
            className="panelAdmin-form-add-input"
            placeholder="Ingredientes"
          ></textarea>
          <select className="panelAdmin-form-add-input panelAdmin-form-select"
            name="panelAdmin-meal-time" id="panelAdmin-meal-time" defaultValue="0">
            <option value="0" key="0" disabled>Categoría</option>
            <option value="1" key="1">desayuno</option>
            <option value="2" key="2">comida</option>
            <option value="3" key="3">cena</option>
          </select>
          <input type="file" id="panelAdmin-image" className="panelAdmin-form-add-input" />
          <input
            type="number"
            id="panelAdmin-price"
            className="panelAdmin-form-add-input"
            placeholder="Precio"
          />
          <input type="checkbox" name="" id="" />
          <button className="panelAdmin-form-btn" type="submit" id="panelAdmin-submit" onClick={addProductBtn}>
            Enviar
          </button>
        </form>
      </div>
    );
  };

  const removeProduct = () => {
    generateList();
    setFormContent(
      <div className="panelAdmin-form-remove-product">
        <h2 className="panelAdmin-title-form">Selecciona un producto</h2>
        <select
          className="panelAdmin-form-select"
          id="panelAdmin-select-form"
        >
          {generateList()}
        </select>
        <div className="panelAdmin-container-btns">
          <button className="panelAdmin-form-btn" id="panelAdmin-delete-product" onClick={removeProductBtn}>
            Eliminar Producto
          </button>
          <button className="panelAdmin-form-btn" id="panelAdmin-delete-products" onClick={removeAllProductsBtn}>
            Borrar todos los productos
          </button>
        </div>
      </div>
    );
  };

  const updateProduct = () => {
    generateList();
    setFormContent(
      <div className="panelAdmin-form-update-product">
        <h2 className="panelAdmin-title-form">Selecciona un producto</h2>
        <select
          className="panelAdmin-form-select"
          id="panelAdmin-select-form"
        >
          {generateList()}
        </select>

        <div className="panelAdmin-form-add-product">
          <h2 className="panelAdmin-title-form panelAdmin-update-form">Modifica los campos necesarios</h2>
          <form className="panelAdmin-form-add" id="panelAdmin-newProductForm">
            <input
              type="text"
              id="panelAdmin-name"
              className="panelAdmin-form-add-input"
              placeholder="Nombre del producto"
            />
            <textarea
              rows="4"
              cols="40"
              id="panelAdmin-desc"
              className="panelAdmin-form-add-input"
              placeholder="Descripcion"
            ></textarea>
            <textarea
              rows="4"
              id="panelAdmin-ingredients"
              className="panelAdmin-form-add-input"
              placeholder="Ingredientes"
            ></textarea>
            <input type="file" id="panelAdmin-image" className="panelAdmin-form-add-input" />
            <select className="panelAdmin-form-add-input panelAdmin-form-select"
            name="panelAdmin-meal-time" id="panelAdmin-meal-time" defaultValue="0">
            <option value="0" key="0" disabled>Categoría</option>
            <option value="1" key="1">desayuno</option>
            <option value="2" key="2">comida</option>
            <option value="3" key="3">cena</option>
          </select>
            <input
              type="number"
              id="panelAdmin-price"
              className="panelAdmin-form-add-input"
              placeholder="Precio"
            />
          </form>
          <button className="panelAdmin-form-btn" id="panelAdmin-form-update-product" onClick={updateProductBtn}>
            Enviar
          </button>
        </div>
      </div>
    );
  };

  const watchProduct = () => {

    setFormContent(
      <div className="panelAdmin-form-remove-product">
        <h2 className="panelAdmin-title-form">Productos</h2>
        <select
          className="panelAdmin-form-select"
          id="panelAdmin-select-form"
        >
          {generateList()}
        </select>
      </div>
    );

  }

  const menuProducts = () => {

    const id = "#panelAdmin-menu-products"
    const index = getValue(id)

    switch (index) {

      case 1:
        generateFormAdd();
        break;
      case 2:
        removeProduct();
        break;
      case 3:
        updateProduct();
        break;
      case 4:
        watchProduct();
        break;
    }

  }

  return (
    <div>
      <div className="panelAdmin-container-form-nav">
        <ul className="panelAdmin-form-nav">
          <li key="0" className="panelAdmin-form-nav-item">
            <button
              className="panelAdmin-nav-item-btn"
              onClick={orders}
            >
              Ordenes
            </button>
          </li>
          <li key="1" className="panelAdmin-form-nav-item">
            <select onClick={menuProducts} defaultValue="0" name="panelAdmin-menu-products" id="panelAdmin-menu-products" className="panelAdmin-nav-item-btn">
              <option key="0" value="0" disabled>Productos</option>
              <option key="1" value="1">Añadir productos</option>
              <option key="2" value="2">Borrar productos</option>
              <option key="3" value="3">Modificar Productos</option>
              <option key="4" value="4">Ver Productos</option>
            </select>
          </li>
        </ul>
      </div>

      <section className="panelAdmin-products-container">
        <div className="panelAdmin-container">
          <div id="panelAdmin-list-products">{formContent}</div>
        </div>
      </section>
    </div>
  );


}





export default PanelAdministracion;