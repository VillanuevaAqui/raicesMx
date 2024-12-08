import React, { useState } from "react";
//import "./Principalpage.css";

const Principalpage = () => {
    return (
        <div> {/*DIV DE INICIO*/}

        
            {/*IMAGEN GRANDE DEL INICIO*/}
            <div className="MainContainer">
                <img className="background-image" src="/assets/Pozole.webp" alt="Olla de pozole rojo" style={{ width: '100%' }}/>
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


        {/*DIV DE CIERRE*/}
        </div> 
    );
};

export default Principalpage;