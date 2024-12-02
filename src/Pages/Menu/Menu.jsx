import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
    // Estado para gestionar el menú activo (Desayuno, Comida, Cena)
    const [activeMenu, setActiveMenu] = useState("Desayuno");

    // Elementos del menú (puedes ampliarlos según sea necesario)
    const menuItems = {
        Desayuno: [
            { title: "Huevos con tocino", imgSrc: "/assets/Huevos-tocino.webp", description: "Delicioso desayuno con huevos y tocino." },
            { title: "Omelette con jamón", imgSrc: "/assets/Omelette con jamón.webp", description: "Un omelette clásico con jamón." },
            { title: "Sandwich", imgSrc: "/assets/Sandwitch.webp", description: "Un delicioso sandwich para el almuerzo." },,
            { title: "Enchiladas", imgSrc: "/assets/Enchiladas.webp", description: "Enchiladas tradicionales mexicanas." },
            { title: "Avena con fruta", imgSrc: "/assets/Avena-fruta.webp", description: "Un rico plato de avena con frutas." },
            { title: "Hot cakes de platano y avena", imgSrc: "/assets/Hot-cakes-avena-platano.webp", description: "Unos ricos hot cakes de platano y avena" },
        ],
        Comida: [
            { title: "Carne con ensalada", imgSrc: "/assets/Ensalada con carne.webp", description: "Un deliciosa carne con ensalada" },
            { title: "Lasaña", imgSrc: "/assets/Lasagna.webp", description: "Una lasaña jugosa con capas de queso." },
            { title: "Pozole", imgSrc: "/assets/Pozole.webp", description: "Un rico pozole mexicano." }
        ],
        Cena: [
            { title: "Molletes", imgSrc: "/assets/Molletes.webp", description: "Unos deliciosos molletes." },
            { title: "Sincronizadas", imgSrc: "/assets/Sincronizadas.webp", description: "Unas ricas sincronizadas." },
            { title: "Tostada de tinga de pollo", imgSrc: "/assets/Tinga-pollo.webp", description: "Unas ricas tostadas tinga de pollo."}
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
                        {menuItems[activeMenu].map((item, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4">
                                <div className="card-menu">
                                    <img 
                                        src={item.imgSrc} 
                                        className="card-img-top-menu" 
                                        alt={item.title} 
                                    />
                                    <div className="card-body-menu">
                                        <h5 className="card-title-menu">{item.title}</h5>
                                        <p className="card-text-menu">{item.description}</p>
                                        <button className="btn-menu">Agregar al carrito</button>
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
