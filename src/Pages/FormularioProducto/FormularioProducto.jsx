
import "./FormularioProducto.css"
import React, { useState } from 'react';
import ProductsController from "./productsController.js";


const productsController = new ProductsController;

function addProductBtn (){

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

  // Add the item to the ItemsController
  productsController.addProduct(name, desc, ingredients, imageUrl, price);

  // Clear the form
  newProductName.value = '';
  newProductDesc.value = '';
  console.log('Test después de añadir\n');
  console.log(productsController.products);

}

function removeAllProductsBtn () {

  productsController.removeAllProducts();
  console.log(productsController.products);
  
  
  alert("Se borro todo mi loco")

}

function removeProductBtn () {

  const index = getValue();
  productsController.removeProduct(index);
  FormularioProducto(1);

}

function updateProductBtn (){

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

        // productsController.updateProduct(index, {name: nameGet, desc: descGet, ingredients: ingredientsGet, imageUrl: imageUrlGet, price: priceGet});
        console.log(productsController.products)

}

function getValue() {

  const selectElement = document.querySelector("#select-form")
  const selectValue = parseInt(selectElement.value);
  console.log(selectValue)
  console.log(parseInt(selectValue));
  return selectValue;
}

function generateList() {
  
  return (
    <>
    {
      productsController.products.map((product) => (

        <option value={product.id}>{product.name}</option>
      ))
    }
    </>

  );

  
}

const handleSubmit = (e) => {
  e.preventDefault(); // Evita que el formulario se recargue por defecto

}


const FormularioProducto = (number) => {
  
  if (number === 1) {

    removeProduct();

  } else if (number == 2) {

    updateProduct();

  } else {

    const [formContent, setFormContent] = useState(null);

  const generateFormAdd = () => {
    setFormContent(
      <div className="form-add-product">
        <h2 className="title-form">Añadir productos</h2>
        <form className="form-add" id="newProductForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            className="form-add-input"
            placeholder="Nombre del producto"
          />
          <textarea
            rows="4"
            cols="40"
            id="desc"
            className="form-add-input"
            placeholder="Descripcion"
          ></textarea>
          <textarea
            rows="4"
            id="ingredients"
            className="form-add-input"
            placeholder="Ingredientes"
          ></textarea>
          <input type="file" id="image" className="form-add-input" />
          <input
            type="number"
            id="price"
            className="form-add-input"
            placeholder="Precio"
          />
          <button className="form-btn" type="submit" id="submit" onClick={addProductBtn}>
            Enviar
          </button>
        </form>
      </div>
    );
  };

  const removeProduct = () => {
    setFormContent(
      <div className="form-remove-product">
        <h2 className="title-form">Selecciona un producto</h2>
        <select
          className="form-select form-select-lg mb-3"
          id="select-form"
          aria-label=".form-select-lg example"
        >
          {generateList()}
        </select>
        <button className="form-btn" id="delete-product" onClick={removeProductBtn}>
          Eliminar Producto
        </button>
      </div>
    );
  };

  const updateProduct = () => {
    setFormContent(
      <div className="form-update-product">
        <h2 className="title-form">Selecciona un producto</h2>
        <select
          className="form-select form-select-lg mb-3"
          id="select-form"
          aria-label=".form-select-lg example"
        >
          {generateList()}
        </select>

        <div className="form-add-product">
          <h2 className="title-form update-form">Modifica los campos necesarios</h2>
          <form className="form-add" id="newProductForm">
            <input
              type="text"
              id="name"
              className="form-add-input"
              placeholder="Nombre del producto"
            />
            <textarea
              rows="4"
              cols="40"
              id="desc"
              className="form-add-input"
              placeholder="Descripcion"
            ></textarea>
            <textarea
              rows="4"
              id="ingredients"
              className="form-add-input"
              placeholder="Ingredientes"
            ></textarea>
            <input type="file" id="image" className="form-add-input" />
            <input
              type="number"
              id="price"
              className="form-add-input"
              placeholder="Precio"
            />
          </form>
          <button className="form-btn" id="form-update-product" onClick={updateProductBtn}>
            Enviar
          </button>
        </div>
      </div>
    );
  };

  const removeAllProducts = () => {
    setFormContent(
      <div className="form-remove-all">
        <h2 className="title-form">¿Estás seguro de querer borrar todo?</h2>
        <button className="form-btn" id="delete-products" onClick={removeAllProductsBtn}>
          Dale mi loco
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="container-form-nav">
        <ul className="form-nav">
          <li className="form-nav-item">
            <button
              className="nav-item-btn"
              onClick={generateFormAdd}
            >
              Agregar Producto
            </button>
          </li>
          <li className="form-nav-item">
            <button
              className="nav-item-btn"
              onClick={updateProduct}
            >
              Modificar Producto Existente
            </button>
          </li>
          <li className="form-nav-item">
            <button
              className="nav-item-btn"
              onClick={removeProduct}
            >
              Remover un Producto
            </button>
          </li>
          <li className="form-nav-item">
            <button
              className="nav-item-btn"
              onClick={removeAllProducts}
            >
              Eliminar todos los productos
            </button>
          </li>
        </ul>
      </div>

      <section className="products-container">
        <div className="container">
          <div id="list-products">{formContent}</div>
        </div>
      </section>
    </div>
  );
};

  }

  
  

export default FormularioProducto;