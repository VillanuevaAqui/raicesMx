import React, { useState } from "react";
import "./Principalpage.css";

const Principalpage = () => {
    return (
        <div>
            {/*IMAGEN GRANDE DEL INICIO*/}
        <div className="MainContainer">
            <img className="background-image" src="./Imagenes/Pozole.png" alt="Olla de pozole rojo"/>
            {/*BOTONES ENCIMA DE LA IMAGEN GRANDE DEL INICIO*/}
            <div className="MainContainerText">
                <h1 className="h1MCT">Platillos exquisitos</h1>
                <h2 className="h2MCT">TODOS LOS DÍAS</h2>
            </div>
            {/*BOTONES ENCIMA DE LA IMAGEN GRANDE DEL INICIO*/}
            <div className="MainContainerButtons">
                <a href="#" className="button"><strong>Suscríbete</strong></a>
                <a href="#" className="button"><strong>Menú a domicilio</strong></a>
            </div>
        </div>
        </div>
    );
};

export default Principalpage;