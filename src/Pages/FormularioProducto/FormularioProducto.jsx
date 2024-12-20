
import "./FormularioProducto.css"
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import GenerateList from "../../components/generateList/GenerateList.jsx";
import CardProduct from "../../components/CardProduct/CardProduct.jsx";

const API_URL = 'http://3.135.216.95:8080/api/product';

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Validaciones del formulario
const validateForm = (name = "", desc = "", ingredients = "", imageURL = "", price = "") => {
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
  const validTypes = ["image/png", "image/jpeg", "image/webp"];
  if (!file || !validTypes.includes(file.type)) {
    alert("Debe seleccionar una imagen en formato PNG, JPG o WEBP.");
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
  const validTypes = ["image/png", "image/jpeg", "image/webp"];
  if (file && !validTypes.includes(file.type)) {
    alert("Por favor, seleccione solo imágenes en formato PNG, JPG o WEBP.");
    event.target.value = ""; // Limpia el campo si el archivo no es válido
  } else {
    console.log("Archivo válido:", file);
  }
};

const validateExtras = (name = "", price = "") => {
  let isValid = true;

  // Validar nombre del producto
  if (!name.trim() || name.length < 3 || name.length > 50) {
    alert("El nombre debe tener entre 3 y 50 caracteres.");
    isValid = false;
  }

  const priceValue = parseFloat(price);
  if (isNaN(priceValue) || priceValue <= 0) {
    alert("El precio debe ser un número mayor a 0.");
    isValid = false;
  }

  return isValid;
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Logic implemented to manipulate the productsController class, with the key functions being addProductBtn, 
 *removeProductBtn, removeAllProductsBtn, and updateProductBtn. */

const extras = [];
function handleExtras() {
  const newProductExtraName = document.querySelector('#panelAdmin-extra-name');
  const newProductExtraPrice = document.querySelector('#panelAdmin-extra-price');
  const extraName = newProductExtraName.value;
  const extraPrice = newProductExtraPrice.value;
  if (!validateExtras(extraName, extraPrice)) {
    console.log("Formulario inválido, no se enviaron los datos.");
    return; // Detener si la validación falla
  }
  const newExtra = { name: extraName, price: extraPrice };
  extras.push(newExtra);
  Swal.fire({
    title: "Extra añadido",
    icon: "success"
  });
  console.log(extras);
  newProductExtraName.value = '';
  newProductExtraPrice.value = '';
}

function extrasToString(extras) {
  return extras.map(extra => `${extra.name}: ${extra.price}`).join(', ');
}

const uploadImage = async (image) => {
  const file = image.files[0];
  const formData = new FormData();
  formData.append("file", file);
  try {
    // Realiza la petición POST
    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      throw new Error(`Error en la carga: ${response.status}`);
    }
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}

const postProduct = async (productData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    console.log("Respuesta del servidor:", result);
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}

async function addProductBtn() {
  // Select the inputs
  const newProductName = document.querySelector('#panelAdmin-name');
  const newProductDesc = document.querySelector('#panelAdmin-desc');
  const newProductIngredients = document.querySelector('#panelAdmin-ingredients');
  const newProductimageURL = document.querySelector('#panelAdmin-image');
  const newProductPrice = document.querySelector('#panelAdmin-price');
  const newProductCategory = document.querySelector('#panelAdmin-meal-time');
  const newProductExtraName = document.querySelector('#panelAdmin-extra-name');
  const newProductExtraPrice = document.querySelector('#panelAdmin-extra-price');

  // Get the values of the inputs
  const name = newProductName.value;
  const desc = newProductDesc.value;
  const ingredients = newProductIngredients.value;
  const imageURL = newProductimageURL.value;
  const price = newProductPrice.value;
  const category = newProductCategory.value;
  const productExtras = [...extras];
  // llama validacion     
  if (!validateForm(name, desc, ingredients, imageURL, price)) {
    console.log("Formulario inválido, no se enviaron los datos.");
    return; // Detener si la validación falla
  }

  //Si pasa la validacion se preparando producto para POST

  const imageUrl = await uploadImage(newProductimageURL);
  const extrasString = extrasToString(productExtras);
  const numberPrice = parseInt(price);

  const productData = {
    name: name,
    description: desc,
    ingredients: ingredients,
    meal_time: category,
    image: imageUrl,
    price: numberPrice,
    extras: extrasString,
    stock: 100
  }
  postProduct(productData);

  // Clear the form
  newProductName.value = '';
  newProductDesc.value = '';
  newProductIngredients.value = '';
  newProductimageURL.value = '';
  newProductPrice.value = '';
  newProductCategory.value = '0';
  newProductExtraName.value = '';
  newProductExtraPrice.value = '';

  Swal.fire({
    title: "Producto añadido",
    icon: "success"
  });
  extras.splice(0, extras.length);
}

async function removeProductBtn() {

  const id = "#panelAdmin-select-form"
  const index = parseInt(getValue(id));
  console.log(index);

  if (index == -1) {

    Swal.fire({
      title: "ERROR",
      text: "Seleccione un producto valido",
      icon: "error",
    });

  } else {

    try {
      const response = await fetch(`${API_URL}/${index}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar el producto: ${response.status}`);
      }
  
      Swal.fire({
        title: "Producto eliminado",
        icon: "success",
      });
  
      console.log(`Producto con ID ${index} eliminado con éxito.`);
    } catch (error) {
      console.error("Hubo un problema al intentar eliminar el producto:", error.message);
      Swal.fire({
        title: "Error",
        text: "No se pudo eliminar el producto.",
        icon: "error",
      });
    }
  }
}

const putProduct = async (productData, index) => {
  try {
    const response = await fetch(`${API_URL}/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    console.log("200");
  } catch (error) {
    console.error("Hubo un problema con la solicitud:", error.message);
  }
}


async function updateProductBtn() {

  const id = document.getElementById("id-form-product")
  const index = parseInt(id.innerHTML)
  console.log(index)

  // Select the inputs
  const newProductName = document.querySelector('#panelAdmin-name');
  const newProductDesc = document.querySelector('#panelAdmin-desc');
  const newProductIngredients = document.querySelector('#panelAdmin-ingredients');
  const newProductimageURL = document.querySelector('#panelAdmin-image');
  const newProductPrice = document.querySelector('#panelAdmin-price');
  const newProductCategory = document.querySelector('#panelAdmin-meal-time');
  const newProductExtraName = document.querySelector('#panelAdmin-extra-name');
  const newProductExtraPrice = document.querySelector('#panelAdmin-extra-price');


  // Get the values of the inputs
  const nameGet = newProductName.value.trim();
  const descGet = newProductDesc.value.trim();
  const ingredientsGet = newProductIngredients.value.trim();
  const imageURLGet = newProductimageURL.value.trim();
  const priceGet = newProductPrice.value.trim();
  const categoryGet = newProductCategory.value.trim();
  const productExtras = [...extras];

  // Validar los campos usando la función validateForm
  if (!validateForm(nameGet, descGet, ingredientsGet, imageURLGet, priceGet)) {
    console.log("Formulario inválido, no se actualizó el producto.");
    return; // Detener la ejecución si la validación falla
  }

  const imageUrl = await uploadImage(newProductimageURL);
  const extrasString = extrasToString(productExtras);
  const number = parseInt(priceGet);

  const updatedProduct = {};

  if (nameGet) updatedProduct.name = nameGet;
  if (descGet) updatedProduct.description = descGet;
  if (ingredientsGet) updatedProduct.ingredients = ingredientsGet;
  if (categoryGet) updatedProduct.meal_time = categoryGet;
  if (imageURLGet) updatedProduct.image = imageUrl;
  if (priceGet) updatedProduct.price = number;
  if(extrasString) updatedProduct.extras = extrasString;
  updatedProduct.stock = 100;

  // Actualiza el producto solo si hay campos válidos
  if (Object.keys(updatedProduct).length > 0) {
    putProduct(updatedProduct, index);
    Swal.fire({
      title: "Producto actualizado",
      icon: "success"
    });
  } else {
    console.log("No se actualizó porque todos los campos están vacíos");
  }
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

function PanelAdministracion() {



  const [formContent, setFormContent] = useState(
    <div className="panelAdmin-form-remove-product">
      <h2 className="panelAdmin-title-form">Ordenes</h2>
      <select defaultValue="-1"
        className="panelAdmin-form-select"
        id="panelAdmin-select-form"
      >
        <GenerateList textDefault="Seleccione una orden" />
      </select>
      <button className="panelAdmin-form-btn" id="panelAdmin-form-update-product" onClick={cardOrder}>Ver</button>
    </div>);

  const [orders, setOrders] = useState([
    { id: 1, date: "2024-11-01", total: 100 },
    { id: 2, date: "2024-11-15", total: 50 },
    { id: 3, date: "2024-11-15", total: 50 },
  ]);

  function cardOrder() {

    setFormContent(
      <section className="userpage-section">
        <h2>Mis Órdenes</h2>
        <ul className="userpage-orders-list">
          {orders.map((order) => (
            <li key={order.id} className="userpage-order-item panelAdmin-userpage-order-item">
              <div className="userpage-order-details">
                <strong>Orden #{order.id}</strong>
                <p>Fecha: {order.date}</p>
                <p>Total: ${order.total}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  const ordersForm = () => {
    setFormContent(
      <div className="panelAdmin-form-remove-product">
        <h2 className="panelAdmin-title-form">Ordenes</h2>
        <select
          className="panelAdmin-form-select"
          id="panelAdmin-select-form"
          defaultValue="-1"
        >
          <GenerateList textDefault="Seleccione una orden" />
        </select>
        <button className="panelAdmin-form-btn" id="panelAdmin-form-update-product" onClick={cardOrder}>Ver</button>
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
            <option value="0" key="Categoria" disabled>Categoría</option>
            <option value="desayuno" key="desayuno">Desayuno</option>
            <option value="comida" key="comida">Comida</option>
            <option value="cena" key="cena">Cena</option>
          </select>
          <input type="file" id="panelAdmin-image" className="panelAdmin-form-add-input" name="image" />
          <input
            type="number"
            id="panelAdmin-price"
            className="panelAdmin-form-add-input"
            placeholder="Precio"
          />
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              id="panelAdmin-extra-name"
              className="panelAdmin-form-add-input"
              placeholder="Extra"
            />
            <input
              type="number"
              id="panelAdmin-extra-price"
              className="panelAdmin-form-add-input"
              placeholder="Precio del extra"
            />
          </div>
          <button type="button" className="panelAdmin-form-btn" onClick={handleExtras}>
            Añadir extra
          </button>
          <button className="panelAdmin-form-btn" type="submit" id="panelAdmin-submit" onClick={addProductBtn}>
            Enviar
          </button>
        </form>
      </div>
    );
  };

  const removeProduct = () => {
    setFormContent(
      <div className="panelAdmin-form-remove-product">
        <h2 className="panelAdmin-title-form">Selecciona un producto</h2>
        <select
          className="panelAdmin-form-select"
          id="panelAdmin-select-form"
          defaultValue="-1"
        >
          <GenerateList textDefault="Seleccione un producto"/>
        </select>
        <div className="panelAdmin-container-btns">
          <button className="panelAdmin-form-btn" id="panelAdmin-delete-product" onClick={removeProductBtn}>
            Eliminar Producto
          </button>
        </div>
      </div>
    );
  };

  const cardformUpdate = () => {

    const id = "#panelAdmin-select-form"
    const index = getValue(id);
    console.log(index)

    if (index == -1) {

      Swal.fire({
        title: "ERROR",
        text: "Seleccione un producto valido",
        icon: "error",
      });

    } else {

      setFormContent(

        <div className="panelAdmin-show-updateProduct">
          <div className="panelAdmin-form-add-product">
            <h2 className="panelAdmin-title-form">Modificar Producto</h2>
            <p id="id-form-product">{index}</p>
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
                <option value="0" key="Categoria" disabled>Categoría</option>
                <option value="desayuno" key="desayuno">Desayuno</option>
                <option value="comida" key="comida">Comida</option>
                <option value="cena" key="cena">Cena</option>
              </select>
              <input type="file" id="panelAdmin-image" className="panelAdmin-form-add-input" name="image" />
              <input
                type="number"
                id="panelAdmin-price"
                className="panelAdmin-form-add-input"
                placeholder="Precio"
              />
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input
                  type="text"
                  id="panelAdmin-extra-name"
                  className="panelAdmin-form-add-input"
                  placeholder="Extra"
                />
                <input
                  type="number"
                  id="panelAdmin-extra-price"
                  className="panelAdmin-form-add-input"
                  placeholder="Precio del extra"
                />
              </div>
              <button type="button" className="panelAdmin-form-btn" onClick={handleExtras}>
                Añadir extra
              </button>
              <button className="panelAdmin-form-btn" id="panelAdmin-submit" onClick={updateProductBtn}>
                Enviar
              </button>
            </form>
          </div>
          <CardProduct index={index} />
        </div>
      )
    }
  }

  const updateProduct = () => {
    setFormContent(
      <div className="panelAdmin-form-update-product">
        <h2 className="panelAdmin-title-form">Selecciona un producto</h2>
        <select
          className="panelAdmin-form-select"
          id="panelAdmin-select-form"
          defaultValue="-1"
        >
          <GenerateList textDefault="Seleccione un producto" />
        </select>
        <button className="panelAdmin-form-btn" id="panelAdmin-form-update-product" onClick={cardformUpdate}>Modificar</button>
      </div>
    );
  };

  const cardProduct = () => {

    const id = "#panelAdmin-select-form"
    const index = parseInt(getValue(id));
    console.log(index)

    if (index == -1) {

      Swal.fire({
        title: "ERROR",
        text: "Seleccione un producto valido",
        icon: "error",
      });

    } else {

      setFormContent(<CardProduct index={index} />);

    }  
  }

  const watchProduct = () => {

    setFormContent(
      <div className="panelAdmin-form-remove-product">
        <h2 className="panelAdmin-title-form">Selecciona un producto</h2>
        <select
          className="panelAdmin-form-select"
          id="panelAdmin-select-form"
          defaultValue="-1"
        >
          <GenerateList textDefault="Seleccione un producto"/>
        </select>
        <button className="panelAdmin-form-btn" id="panelAdmin-form-update-product" onClick={cardProduct}>Ver</button>
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
              onClick={ordersForm}
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
          <div className="panelAdmin-list-products">{formContent}</div>
        </div>
      </section>
    </div>
  );
}

export default PanelAdministracion;