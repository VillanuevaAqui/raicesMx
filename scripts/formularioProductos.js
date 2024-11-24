function createContainer () {
    
    const main = document.querySelector(".main")
    const containerForm = document.createElement("div");
    containerForm.setAttribute("class", "container-form");
    
    return main.appendChild(containerForm);

}


function generateFormAdd (){
        
        const formAddProduct = `<div class = "form-add-product">
                                <h2 class = "title-form">Añadir productos</h2>
                                <form class = "form-add">
                                    <input type = "text" id = "name" class = "form-add-input" placeholder = "Nombre del producto"/>
                                    <textarea rows = "4" cols = "40" id = "desc" class = "form-add-input" placeholder = "Descripcion"></textarea>
                                    <textarea rows = "4" id = "ingredients" class = "form-add-input" placeholder = "Ingredientes"></textarea>
                                    <input type = "file" id = "image" class = "form-add-input"/>
                                    <input type = "number" id = "price" class = "form-add-input" placeholder = "Precio"/>
                                </form>
                                <button class = "form-btn">Enviar</button>
                                </div>`
                                
        containerForm.innerHTML = formAddProduct;

}

function autoPressButtom () {

    const buttom = document.getElementById("addProduct");
    buttom.click();

}


function removeProduct() {

    const formRemoveProduct = ` <div class = "form-remove-product">
                                <h2 class = "title-form">Seleciona un producto</h2>
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                               </select>
                               
                               <button class="form-btn">Eliminar Producto</button>
                               </div>`;

    containerForm.innerHTML = formRemoveProduct;

}

function updateProduct () {

    const formUpdateProduct = `<div class = "form-update-product">
                                <h2 class = "title-form">Seleciona un producto</h2>
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                               </select>
                               
                               <button class="form-btn">Modificar producto</button>
                               </div>`;

    containerForm.innerHTML = formUpdateProduct;

}

function removeAllProducts() {

    const formRemoveAllProducts = `<div class = "form-remove-all">
                                   <h2 class = "title-form">Estas seguro de querer borrar todo?</h2>
                                   <button class="form-btn">Dale mi loco</button>
                                   </div>`;
    
    containerForm.innerHTML = formRemoveAllProducts;                              

}

const containerForm = createContainer();
autoPressButtom();