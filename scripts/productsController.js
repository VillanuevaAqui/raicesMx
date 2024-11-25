//Creacion de la clase controlador.
export class ProductsController {
    constructor(currentId) {
        this.examples = [
            {
              name: "Pizza Margarita",
              desc: "Pizza clásica con salsa de tomate, queso mozzarella y albahaca fresca.",
              ingredients: ["Masa de pizza", "Salsa de tomate", "Queso mozzarella", "Albahaca"],
              imageURL: "https://placehold.co/200x200",
              Price: 12.99
            },
            {
              name: "Hamburguesa Clásica",
              desc: "Hamburguesa con carne de res, lechuga, tomate, cebolla y queso cheddar.",
              ingredients: ["Carne de res", "Pan de hamburguesa", "Lechuga", "Tomate", "Cebolla", "Queso cheddar", "Mayonesa"],
              imageURL: "https://placehold.co/200x200",
              Price: 8.50
            },
            {
              name: "Ensalada César",
              desc: "Ensalada fresca con lechuga, crutones, pollo a la parrilla, y aderezo César.",
              ingredients: ["Lechuga", "Crutones", "Pollo a la parrilla", "Aderezo César", "Queso parmesano"],
              imageURL: "https://placehold.co/200x200",
              Price: 9.99
            },
            {
              name: "Sushi Rolls",
              desc: "Rollos de sushi con atún, aguacate, pepino y arroz sazonado.",
              ingredients: ["Arroz para sushi", "Atún", "Aguacate", "Pepino", "Alga nori", "Salsa de soya"],
              imageURL: "https://placehold.co/200x200",
              Price: 15.00
            },
            {
              name: "Tacos al Pastor",
              desc: "Tacos de carne al pastor, cebolla, cilantro y piña en tortillas de maíz.",
              ingredients: ["Carne al pastor", "Cebolla", "Cilantro", "Piña", "Tortillas de maíz", "Salsa roja"],
              imageURL: "https://placehold.co/200x200",
              Price: 6.50
            },
            {
              name: "Pasta Bolognesa",
              desc: "Pasta con salsa boloñesa a base de carne molida, tomate y especias.",
              ingredients: ["Pasta", "Carne molida", "Salsa de tomate", "Cebolla", "Ajo", "Especias italianas", "Queso parmesano"],
              imageURL: "https://placehold.co/200x200",
              Price: 11.75
            },
            {
              name: "Tortilla Española",
              desc: "Tortilla de patatas tradicional con cebolla y huevos.",
              ingredients: ["Patatas", "Huevos", "Cebolla", "Aceite de oliva", "Sal"],
              imageURL: "https://placehold.co/200x200",
              Price: 7.99
            },
            {
              name: "Paella Valenciana",
              desc: "Arroz con mariscos, pollo, conejo y verduras al estilo tradicional valenciano.",
              ingredients: ["Arroz", "Mariscos", "Pollo", "Conejo", "Judía verde", "Tomate", "Azafrán", "Pimiento"],
              imageURL: "https://placehold.co/200x200",
              Price: 18.50
            },
            {
              name: "Lasagna",
              desc: "Lasaña de carne con salsa bechamel, tomate, queso mozzarella y pasta.",
              ingredients: ["Pasta para lasaña", "Carne molida", "Salsa de tomate", "Queso mozzarella", "Queso parmesano", "Salsa bechamel"],
              imageURL: "https://placehold.co/200x200",
              Price: 13.00
            },
            {
              name: "Galletas de Chocolate",
              desc: "Galletas crujientes con trozos de chocolate y nueces.",
              ingredients: ["Harina", "Azúcar", "Mantequilla", "Chocolate", "Nueces", "Huevos"],
              imageURL: "https://placehold.co/200x200",
              Price: 4.00
            }
          ];
        this.products = [];
        this.currentId = currentId;
        this.loadProductsFromLocalStorage();
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
        // console.log("Guardando productos:", this.products);
        localStorage.setItem("products", JSON.stringify(this.products));
    }

    //Elimina toda la lista de los productos.
    removeAllProducts() {
        this.products = [];
        this.saveProductsToLocalStorage();
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

            this.saveProductsToLocalStorage();
        }


    }

    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getItem("products");
        if (storageProducts) {
            const products = JSON.parse(storageProducts);
            // for (let i = 0, size = products.length; i < size; i++) {
            //     const product = products[i];
            //     this.products.push(product);
            // }
            this.products = products;
            this.currentId = products.reduce((maxId, product) => Math.max(maxId, product.id), 0) + 1;
        }
    }
}


// let unaVariable = new ProductsController();
// unaVariable.addProduct("Poizole", "rojo verde blanco", "Pozole :)", "Aquí va un pozole", 200);
// unaVariable.addProduct("Enchiladas", "rojo verde blanco", "Pozole :)", "Aquí va un pozole", 199);
// console.log(unaVariable.products);


// unaVariable.removeProduct(1);
// console.log('Después de eliminar: ',unaVariable.products);