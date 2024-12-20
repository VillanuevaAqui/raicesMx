import React, { useEffect, useState } from 'react';
import './Menu.css';
import { useCart } from "../Cart/CartContext";

const API_URL = 'API_URL/product';

const Menu = () => {
    const [menuItems, setMenuItems] = useState({
        desayuno: [],
        comida: [],
        cena: [],
    });
    const [activeCategory, setActiveCategory] = useState('desayuno'); // Estado para la categoría activa
    const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos
    const [error, setError] = useState(null); // Estado para manejar errores

    const { addToCart } = useCart(); // Acceder a la función para agregar al carrito

    // Función para obtener productos desde la API
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

    // Filtrar productos por categoría
    const filterProductsByCategory = (products) => {
        const desayuno = products.filter(product => product.meal_time === 'desayuno');
        const comida = products.filter(product => product.meal_time === 'comida');
        const cena = products.filter(product => product.meal_time === 'cena');

        setMenuItems({ desayuno, comida, cena });
    };

    // Cargar productos desde la API cuando se monta el componente
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                if (products) {
                    filterProductsByCategory(products); // Actualizar categorías
                }
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Función para manejar clic en los botones de categorías
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    // Renderizar tarjetas
    const renderProductCards = (category) => {
        const products = menuItems[category];

        // Agrupar los productos en filas de 3
        const rows = [];
        for (let i = 0; i < products.length; i += 3) {
            rows.push(products.slice(i, i + 3));
        }

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
            {/* Contenedor del encabezado */}
            <div className="menu-header">
                <h1 className="h1-menu">Menú</h1>
            </div>
            {/* Botones de categorías */}
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
                    {renderProductCards(activeCategory)}
                </div>
            </div>
        </div>
    );
};

export default Menu;
