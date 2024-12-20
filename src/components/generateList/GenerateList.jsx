import React from "react";
import { useState, useEffect } from "react";

function GenerateList({textDefault}) { 

    const API_URL = 'http://3.135.216.95:8080/api/product';
    const [products, setProducts] = useState([]);

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
            setProducts(products)
        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <option value="-1" key="-1" disabled>{textDefault}</option>
            {
                Array.isArray(products) && products.map((product, index) => (
                    <option className="panelAdmin-select-option" key={index} value={product.product_id}>{product.name}</option>
                ))
            }
        </>
    );

}

export default GenerateList;