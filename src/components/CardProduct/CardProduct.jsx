import { useState, useEffect } from "react";

function CardProduct( {index}) {

    const API_URL = 'http://3.135.216.95:8080/api/product';
    const [product, setProduct] = useState(null);

    const getProduct = async (index) => {
        try {
            const response = await fetch(`${API_URL}/${index}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const product = await response.json();
            console.log("Productos obtenidos:", product);
            setProduct(product);
        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error.message);
        }
    };

    useEffect(() => {
        getProduct(index);
    }, []);

    if (product != null) {

        return (
            <div className="card-menu panelAdmin-card-menu">
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
                </div>
            </div>
        );

    }
}

export default CardProduct