//Creacion de la clase controlador.
export class ProductsController {
    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
    }
    /* ProductsController: Es el nombre de la clase.
    *  Constructor: Es un método que se ejecuta automáticamente cuando se crea una instancia de la clase.
    *  this: Referencia a la instancia actual de la clase - items: Es un array vacío.
    *  this.currentId: Es una propiedad que almacena el identificador actual y se inicializa con el valor de parámetro currentId.
    * RESUMEN: La clase ItemsController sirve para manejar una lista de ítems. Cuando se crea una instancia, inicializa una lista vacía y establece un identificador inicial (currentId) que comienza en 0. La lógica es que cada ítem en la lista tendrá un identificador único que puede incrementarse según sea necesario.
    */
    // Creación del método ADDITEM:
    //?Método para añadir un producto:
    addProduct(name, desc, ingredients, imageUrl, price) {
        const product = {
            id: this.currentId++,
            name: name,
            desc: desc,
            ingredients: ingredients,
            imageUrl: imageUrl,
            price: price,
        }
        this.products.push(product); //Selecciona "productos" y le añade las características de arriba - PUSH: Añade algo al final de la lista. Método de listas(arrays).
        this.saveProductsToLocalStorage();
    }
    //Fin del método para añadir un producto.
    removeProduct(currentId) {
        this.products = this.products.filter(item => item.id !== currentId);
        //Crear un nuevo array filtrando únicamente el id del producto que queremos eliminar (Los mueve a una papelera).
        this.saveProductsToLocalStorage();
        //Actualiza el almacenamiento local con los cambios.
    }

    //Guarda los productos en el localStorage con el estado actual del array
    saveProductsToLocalStorage() {
        localStorage.setItem("products", JSON.stringify(this.products));
    }

    //Elimina toda la lista de los productos.
    removeAllProducts() {
        this.products = [];
    }

    //?Modifica un producto en específico.
    updateProduct(currentId, updatedFields) {
        // Busca el producto por su ID
        const productIndex = this.products.findIndex(item => item.id === currentId);


        //Si no se consigue el ID, muestra un error:
        if (productIndex === -1) {
            console.error(`El producto ${currentId} no se encuentra.`);
        } else {
            // Actualiza los campos proporcionados:
            this.products[productIndex] = {
                // Mantén los atributos existentes:
                ...this.products[productIndex],
                // Sobrescribe solo los campos especificados:
                ...updatedFields
            };
        }
    }

    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getItem("products");
        if (storageProducts) {
            const products = JSON.parse(storageProducts)
            console.log(products)
            for (let i = 0, size = products.length; i < size; i++) {
                const product = products[i];
                this.products.push(product);
            }
        }
    }
}

// let unaVariable = new ProductsController();
// unaVariable.addProduct("Poizole", "rojo verde blanco", "Pozole :)", "Aquí va un pozole", 200);
// unaVariable.addProduct("Enchiladas", "rojo verde blanco", "Pozole :)", "Aquí va un pozole", 199);
// console.log(unaVariable.products);


// unaVariable.removeProduct(1);
// console.log('Después de eliminar: ',unaVariable.products);
