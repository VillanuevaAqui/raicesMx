// Initialize a new TaskManager with currentId set to 0
const productsController = new ProductsController(0);


function addProductCard(product){
    const productHTML = '<div class="card" style="width: 20rem;">\n' +
        '    <img src="'+product.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+product.name+'</h5>\n' +
        '        <p class="card-text">'+product.desc+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const productsContainer = document.getElementById("list-products");
    productsContainer.innerHTML += productHTML;
}

function loadStorageSampleData(){
    if(!localStorage.getItem("products")){
        const sampleProducts = [{'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'desc':'Orange and Apple juice fresh and delicious'},
        {'name':'Ruffles Chicken',
        'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
        'desc':'Ruffles Potato Chips - Chicken'}];
        localStorage.setItem("products", JSON.stringify(sampleProducts));
    }
}

function loadCardsListFromProductsController(){
    for(let i = 0, size = productsController.products.length; i < size ; i++){
        const product = productsController.products[i];
        addProductCard(product);
    }
}

loadStorageSampleData();
productsController.loadProductsFromLocalStorage();
loadCardsListFromProductsController();