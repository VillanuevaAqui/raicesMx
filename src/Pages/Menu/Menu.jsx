import React, { useEffect, useState, useMemo } from 'react';
import './Menu.css';
import ProductsController from '../FormularioProducto/productsController'; // Asegúrate de importar tu clase ProductsController.
import { useCart } from "../Cart/CartContext";

const Menu = () => {
    const [menuItems, setMenuItems] = useState({
        desayuno: [],
        comida: [],
        cena: [],
    });
    const [activeCategory, setActiveCategory] = useState('desayuno'); // Estado para la categoría activa

    const { addToCart } = useCart(); // Acceder a la función para agregar al carrito

    // Crear instancia única de ProductsController
    const productsController = useMemo(() => new ProductsController(0), []);

    // Filtrar productos por categoría
    const filterProductsByCategory = (products) => {
        const desayuno = products.filter(product => product.category === 'desayuno');
        const comida = products.filter(product => product.category === 'comida');
        const cena = products.filter(product => product.category === 'cena');

        setMenuItems({ desayuno, comida, cena });
    };

    // Cargar productos desde el controlador cuando se monta el componente
    useEffect(() => {
        const fetchProducts = () => {
            const allProducts = productsController.products;
            filterProductsByCategory(allProducts); // Actualizar categorías
        };

        fetchProducts();
    }, [productsController]);

    // Función para manejar clic en los botones de categorías
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    // Renderizar tarjetas
    const renderProductCards = (category) => {
        return menuItems[category].map((product) => (
            <div className="row col-12 d-flex justify-content-center align-items-center">
                <div key={product.id} className="col-12 col-sm-6 col-md-4">
                    <div className="card-menu">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="card-img-top-menu"
                        />
                        <div className="card-body-menu">
                            <h5 className="card-title-menu">{product.name}</h5>
                            <p className="card-text-menu">{product.desc}</p>
                            <p className="card-text-menu"><strong>Ingredientes:<br></br></strong> {product.ingredients}</p>
                            <p className="card-price-menu"><strong>Precio:</strong> ${product.price}</p>
                            {/* Botón para agregar al carrito */}
                            <button className="btn-menu" onClick={() => addToCart(product)}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="menu">
            <h1 className="h1-menu">Menú</h1>

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
