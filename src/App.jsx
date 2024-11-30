import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignIn from './components/Pages/SignIn/SignIn.jsx';
import Register from './components/Pages/Register/Register.jsx';

import TitleCard from './components/TitleCard/TitleCard.jsx';

import Button from './components/Button/Button.jsx';
import TitleBanner from './components/Title-banner/TitleBanner.jsx';
import Nosotros from './components/Pages/Nosotros/Nosotros.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* Título principal con imagen */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <TitleCard
            title="Bienvenido a Mi Aplicación"
            subtitle="Explora nuestras funciones a continuación."
            imageSrc="https://placehold.co/600x400" // URL de una imagen de ejemplo
          />
        </div>
        <Routes>
        {/* <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />*/}
        <Route path="/nosotros" element={<Nosotros />} />
        {/*<Route path="/beneficios" element={<Beneficios />} /> */}
        <Route path="/registro" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      
      </BrowserRouter>
      <TitleBanner title="Test"/>
      <Button text="Botón"/>

      <BrowserRouter>
      <Footer />
      {/* <Routes>
        <Route path="/contacto" element={<Contacto />} />
      </Routes> */}
      </BrowserRouter>
    </>
  )
}

export default App
