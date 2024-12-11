import React, { useState } from "react";
import "./Menu.css";
import { useCart } from "../Cart/CartContext";

const Menu = () => {
    // Estado para gestionar el menú activo (Desayuno, Comida, Cena)
    const [activeMenu, setActiveMenu] = useState("Desayuno");
    const { addToCart } = useCart();

    // Elementos del menú con id único
    const menuItems = {
        Desayuno: [
            {
                id: 1,
                name: "Huevos con tocino",
                desc: "Desayuno clásico con huevos estrellados y tocino crujiente.",
                ingredients: ["Huevos", "Tocino", "Sal", "Pimienta"],
                imageURL: "/assets/Huevos-tocino.webp",
                price: 55.99,
                extras: [
                    { name: "Tortilla de harina", price: 5.00 },
                    { name: "Salsa roja o verde", price: 3.00 },
                    { name: "Extra tocino", price: 10.00 }
                ]
            },
            {
                id: 2,
                name: "Omelette con jamón",
                desc: "Omelette relleno de jamón, queso y pimientos.",
                ingredients: ["Huevos", "Jamón", "Queso", "Pimientos"],
                imageURL: "/assets/Omelette con jamón.webp",
                price: 60.50,
                extras: [
                    { name: "Champiñones", price: 8.00 },
                    { name: "Espinacas", price: 7.00 },
                    { name: "Extra queso", price: 5.00 }
                ]
            },
            {
                id: 3,
                name: "Sandwich",
                desc: "Sandwich con pan integral, jamón, queso y vegetales frescos.",
                ingredients: ["Pan integral", "Jamón", "Queso", "Lechuga", "Tomate"],
                imageURL: "/assets/Sandwitch.webp",
                price: 45.00,
                extras: [
                    { name: "Aguacate", price: 10.00 },
                    { name: "Mayonesa chipotle", price: 5.00 },
                    { name: "Extra jamón", price: 8.00 }
                ]
            },
            {
                id: 4,
                name: "Enchiladas",
                desc: "Enchiladas de pollo con salsa roja y queso fresco.",
                ingredients: ["Tortilla", "Pollo", "Salsa roja", "Queso fresco"],
                imageURL: "/assets/Enchiladas.webp",
                price: 65.00,
                extras: [
                    { name: "Crema extra", price: 5.00 },
                    { name: "Guacamole", price: 10.00 },
                    { name: "Frijoles refritos", price: 7.00 }
                ]
            },
            {
                id: 5,
                name: "Avena con fruta",
                desc: "Plato de avena con fruta fresca y miel.",
                ingredients: ["Avena", "Frutas mixtas", "Miel"],
                imageURL: "/assets/Avena-fruta.webp",
                price: 40.00,
                extras: [
                    { name: "Nueces", price: 8.00 },
                    { name: "Chía", price: 5.00 },
                    { name: "Extra miel", price: 3.00 }
                ]
            },
            {
                id: 6,
                name: "Hot cakes de plátano y avena",
                desc: "Hot cakes saludables hechos con plátano y avena.",
                ingredients: ["Avena", "Plátano", "Huevos", "Miel"],
                imageURL: "/assets/Hot-cakes-avena-platano.webp",
                price: 50.00,
                extras: [
                    { name: "Mantequilla", price: 5.00 },
                    { name: "Fruta extra", price: 8.00 },
                    { name: "Jarabe de maple", price: 10.00 }
                ]
            }
        ],
        Comida: [
            {
                id: 7,
                name: "Carne con ensalada",
                desc: "Carne a la parrilla con ensalada fresca.",
                ingredients: ["Carne", "Lechuga", "Tomate", "Zanahoria", "Aderezo"],
                imageURL: "/assets/Ensalada con carne.webp",
                price: 85.00,
                extras: [
                    { name: "Puré de papa", price: 12.00 },
                    { name: "Pan de ajo", price: 10.00 },
                    { name: "Aderezo ranch", price: 5.00 }
                ]
            },
            {
                id: 8,
                name: "Lasaña",
                desc: "Lasaña al horno con capas de carne, queso y salsa.",
                ingredients: ["Pasta", "Carne molida", "Queso", "Salsa de tomate"],
                imageURL: "/assets/Lasagna.webp",
                price: 95.00,
                extras: [
                    { name: "Pan con mantequilla", price: 10.00 },
                    { name: "Salsa adicional", price: 8.00 },
                    { name: "Extra queso", price: 12.00 }
                ]
            },
            {
                id: 9,
                name: "Pozole",
                desc: "Pozole mexicano con maíz, carne y condimentos.",
                ingredients: ["Maíz pozolero", "Carne de cerdo", "Chile", "Condimentos"],
                imageURL: "/assets/Pozole.webp",
                price: 70.00,
                extras: [
                    { name: "Tostadas", price: 5.00 },
                    { name: "Crema", price: 7.00 },
                    { name: "Limón extra", price: 3.00 }
                ]
            }
        ],
        Cena: [
            {
                id: 10,
                name: "Molletes",
                desc: "Pan con frijoles, queso gratinado y pico de gallo.",
                ingredients: ["Pan", "Frijoles", "Queso", "Pico de gallo"],
                imageURL: "/assets/Molletes.webp",
                price: 35.00,
                extras: [
                    { name: "Extra queso", price: 5.00 },
                    { name: "Chorizo", price: 8.00 },
                    { name: "Salsa extra", price: 3.00 }
                ]
            },
            {
                id: 11,
                name: "Sincronizadas",
                desc: "Tortillas de harina rellenas de jamón y queso.",
                ingredients: ["Tortillas de harina", "Jamón", "Queso"],
                imageURL: "/assets/Sincronizadas.webp",
                price: 40.00,
                extras: [
                    { name: "Aguacate", price: 10.00 },
                    { name: "Chiles jalapeños", price: 5.00 },
                    { name: "Extra jamón", price: 8.00 }
                ]
            },
            {
                id: 12,
                name: "Tostada de tinga de pollo",
                desc: "Tostada con tinga de pollo, crema y queso.",
                ingredients: ["Tostada", "Pollo", "Crema", "Queso"],
                imageURL: "/assets/Tinga-pollo.webp",
                price: 50.00,
                extras: [
                    { name: "Aguacate", price: 10.00 },
                    { name: "Salsa extra", price: 3.00 },
                    { name: "Frijoles refritos", price: 7.00 }
                ]
            }
        ]
    };
    

    return (
        <main className="main">
            <section id="menu" className="menu">
                <h1 className="h1-menu">Menú</h1>
                <div className="menu-options">
                    <button 
                        className={`btn-option-menu ${activeMenu === "Desayuno" ? "active" : ""}`} 
                        onClick={() => setActiveMenu("Desayuno")}
                    >
                        Desayuno
                    </button>
                    <button 
                        className={`btn-option-menu ${activeMenu === "Comida" ? "active" : ""}`} 
                        onClick={() => setActiveMenu("Comida")}
                    >
                        Comida
                    </button>
                    <button 
                        className={`btn-option-menu ${activeMenu === "Cena" ? "active" : ""}`} 
                        onClick={() => setActiveMenu("Cena")}
                    >
                        Cena
                    </button>
                </div>
                <div className="container-menu">
                    {/* Renderizamos los items del menú seleccionado */}
                    <div className="row col-12 d-flex justify-content-center align-items-center">
                        {menuItems[activeMenu].map((item) => (
                            <div key={item.id} className="col-12 col-sm-6 col-md-4">
                                <div className="card-menu">
                                    <img 
                                        src={item.imageURL} 
                                        className="card-img-top-menu" 
                                        alt={item.name} 
                                    />
                                    <div className="card-body-menu">
                                        <h5 className="card-title-menu">{item.name}</h5>
                                        <p className="card-text-menu">{item.desc}</p>
                                        <p className="card-price-menu">Precio: ${item.price.toFixed(2)}</p>
                                        <button className="btn-menu" onClick={() => addToCart(item)}>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <br />
        </main>
    );
};

export default Menu;
