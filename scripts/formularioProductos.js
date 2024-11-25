function createContainer () {
    
    const main = document.querySelector(".main")
    const containerForm = document.createElement("div");
    containerForm.setAttribute("class", "container-form");
    
    return main.appendChild(containerForm);

}


function generateFormAdd (){
        
        const formAddProduct = `<div class = "form-add-product">
                                <h2 class = "title-form">Añadir productos</h2>
                                <form class = "form-add" id = "newProductForm">
                                    <input type = "text" id = "name" class = "form-add-input" placeholder = "Nombre del producto"/>
                                    <textarea rows = "4" cols = "40" id = "desc" class = "form-add-input" placeholder = "Descripcion"></textarea>
                                    <textarea rows = "4" id = "ingredients" class = "form-add-input" placeholder = "Ingredientes"></textarea>
                                    <input type = "file" id = "image" class = "form-add-input"/>
                                    <input type = "number" id = "price" class = "form-add-input" placeholder = "Precio"/>
                                    <button class = "form-btn" type="submit" id = "submit">Enviar</button>
                                    </form>
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
                                <select class="form-select form-select-lg mb-3" id = "select-form" aria-label=".form-select-lg example">
                               
                                </select>
                               
                               <button class="form-btn" id = "delete-product" >Eliminar Producto</button>
                               </div>`;

    containerForm.innerHTML = formRemoveProduct;

}

function updateProduct () {

    const formUpdateProduct = `<div class = "form-update-product">
                                <h2 class = "title-form">Seleciona un producto</h2>
                                <select class="form-select form-select-lg mb-3" id = "select-form" aria-label=".form-select-lg example">
                               </select>
                               
                               <button class="form-btn">Modificar producto</button>

                               <div class = "form-add-product">
                                <h2 class = "title-form update-form">Modifica los campos necesarios</h2>
                                <form class = "form-add" id = "newProductForm">
                                    <input type = "text" id = "name" class = "form-add-input" placeholder = "Nombre del producto"/>
                                    <textarea rows = "4" cols = "40" id = "desc" class = "form-add-input" placeholder = "Descripcion"></textarea>
                                    <textarea rows = "4" id = "ingredients" class = "form-add-input" placeholder = "Ingredientes"></textarea>
                                    <input type = "file" id = "image" class = "form-add-input"/>
                                    <input type = "number" id = "price" class = "form-add-input" placeholder = "Precio"/>
                                </form>
                                <button class = "form-btn" id = "form-update-product">Enviar</button>
                                </div>
                               </div>`;

    containerForm.innerHTML = formUpdateProduct;

}

function removeAllProducts() {

    const formRemoveAllProducts = `<div class = "form-remove-all">
                                   <h2 class = "title-form">Estas seguro de querer borrar todo?</h2>
                                   <button class="form-btn" id = "delete-products">Dale mi loco</button>
                                   </div>`;
    
    containerForm.innerHTML = formRemoveAllProducts;                              

}

const containerForm = createContainer();
autoPressButtom();
