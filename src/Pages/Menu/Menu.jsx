import React, { useEffect, useState } from 'react';
import './Menu.css';
import { useCart } from "../Cart/CartContext";

// URL de la API para obtener los productos
const API_URL = 'http://3.135.216.95:8080/api/product';

const Menu = () => {
    // Estado para almacenar los productos de cada categoría
    const [menuItems, setMenuItems] = useState({
        desayuno: [],
        comida: [],
        cena: [],
    });
    
    // Estado para la categoría activa (desayuno, comida, cena)
    const [activeCategory, setActiveCategory] = useState('desayuno');
    
    // Estado para manejar la carga de datos
    const [loading, setLoading] = useState(true);
    
    // Estado para manejar errores
    const [error, setError] = useState(null);

    // Accedemos a la función de agregar productos al carrito
    const { addToCart } = useCart(); 

    // Función para obtener los productos desde la API
    const getProducts = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {  
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const products = await response.json();
            console.log("Productos obtenidos:", products);
            return products;
        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error.message);
        }
    };

    // Función para filtrar los productos por categoría
    const filterProductsByCategory = (products) => {
        const desayuno = products.filter(product => product.meal_time === 'desayuno');
        const comida = products.filter(product => product.meal_time === 'comida');
        const cena = products.filter(product => product.meal_time === 'cena');

        // Actualiza el estado con los productos filtrados
        setMenuItems({ desayuno, comida, cena });
    };

    // Cargar productos desde la API al montar el componente
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                if (products) {
                    filterProductsByCategory(products); // Filtra los productos por categoría
                }
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts(); // Llama a la función para cargar los productos
    }, []);

    // Función para manejar el clic en los botones de categoría
    const handleCategoryChange = (category) => {
        setActiveCategory(category); // Actualiza la categoría activa
    };

    // Función para renderizar las tarjetas de productos en la categoría activa
    const renderProductCards = (category) => {
        const products = menuItems[category];

        // Agrupa los productos en filas de 3 para el diseño
        const rows = [];
        for (let i = 0; i < products.length; i += 3) {
            rows.push(products.slice(i, i + 3));
        }

        // Mapea las filas y las muestra en el componente
        return rows.map((row, rowIndex) => (
            <div className="row col-12 d-flex justify-content-center" key={rowIndex}>
                {row.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4" key={product.product_id}>
                        <div className="card-menu">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="card-img-top-menu"
                            />
                            <div className="card-body-menu">
                                <h5 className="card-title-menu">{product.name}</h5>
                                <p className="card-text-menu">{product.description}</p>
                                <p className="card-text-menu"><strong>Ingredientes:<br></br></strong> {product.ingredients}</p>
                                <p className="card-price-menu"><strong>Precio:</strong> ${product.price}</p>
                                <button className="btn-menu" onClick={() => addToCart(product)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ));
    };
    
    return (
        <div className="menu">
            {/* Contenedor del encabezado con el título del menú */}
            <div className="menu-header">
                <h1 className="h1-menu">Menú</h1>
            </div>
            
            {/* Botones de categorías (Desayuno, Comida, Cena) */}
            <div className="menu-options">
                <button
                    className={`btn-option-menu ${activeCategory === 'desayuno' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('desayuno')}
                >
                    Desayuno
                </button>
                <button
                    className={`btn-option-menu ${activeCategory === 'comida' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('comida')}
                >
                    Comida
                </button>
                <button
                    className={`btn-option-menu ${activeCategory === 'cena' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('cena')}
                >
                    Cena
                </button>
            </div>

            {/* Contenido de la categoría activa */}
            <div className="category">
                <div className="card-container">
                    {renderProductCards(activeCategory)} {/* Muestra las tarjetas de productos según la categoría activa */}
                </div>
            </div>
        </div>
    );
};

export default Menu;
