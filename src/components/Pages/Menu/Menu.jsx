import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
    // Estado para gestionar el menú activo (Desayuno, Comida, Cena)
    const [activeMenu, setActiveMenu] = useState("Desayuno");

    // Elementos del menú (puedes ampliarlos según sea necesario)
    const menuItems = {
        Desayuno: [
            { title: "Huevos con tocino", imgSrc: "/public/assets/Huevos-tocino.jpg", description: "Delicioso desayuno con huevos y tocino." },
            { title: "Omelette con jamón", imgSrc: "/public/assets/Omelette con jamón.svg", description: "Un omelette clásico con jamón." },
            { title: "Sandwich", imgSrc: "/public/assets/Sandwitch.png", description: "Un delicioso sandwich para el almuerzo." },,
            { title: "Enchiladas", imgSrc: "/public/assets/Enchiladas.png", description: "Enchiladas tradicionales mexicanas." },
            { title: "Avena con fruta", imgSrc: "/public/assets/Avena-fruta.svg", description: "Un rico plato de avena con frutas." },
            { title: "Hot cakes de platano y avena", imgSrc: "/public/assets/Hot-cakes-avena-platano.jpg", description: "Unos ricos hot cakes de platano y avena" },
        ],
        Comida: [
            { title: "Carne con ensalada", imgSrc: "/public/assets/Ensalada con carne.svg", description: "Un deliciosa carne con ensalada" },
            { title: "Lasaña", imgSrc: "/public/assets/Lasagna.png", description: "Una lasaña jugosa con capas de queso." },
            { title: "Pozole", imgSrc: "/public/assets/Pozole.png", description: "Un rico pozole mexicano." }
        ],
        Cena: [
            { title: "Molletes", imgSrc: "/public/assets/Molletes.jpg", description: "Unos deliciosos molletes." },
            { title: "Sincronizadas", imgSrc: "/public/assets/Sincronizadas.jpg", description: "Unas ricas sincronizadas." },
            { title: "Tostada de tinga de pollo", imgSrc: "/public/assets/Tinga-pollo.jpg", description: "Unas ricas tostadas tinga de pollo."}
        ]
    };

    return (
        <main className="main">
            <section id="menu" className="menu">
                <h1>Menú</h1>
                <div className="menu-options">
                    <button 
                        className={`btn-option ${activeMenu === "Desayuno" ? "active" : ""}`} 
                        onClick={() => setActiveMenu("Desayuno")}
                    >
                        Desayuno
                    </button>
                    <button 
                        className={`btn-option ${activeMenu === "Comida" ? "active" : ""}`} 
                        onClick={() => setActiveMenu("Comida")}
                    >
                        Comida
                    </button>
                    <button 
                        className={`btn-option ${activeMenu === "Cena" ? "active" : ""}`} 
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
                                <div className="card">
                                    <img 
                                        src={item.imgSrc} 
                                        className="card-img-top" 
                                        alt={item.title} 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
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
