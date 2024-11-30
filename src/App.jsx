import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import TitleBanner from './components/Title-banner/TitleBanner.jsx';
import Button from './components/Button/Button.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        {/* <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/beneficios" element={<Beneficios />} /> */}
        <Route path="/registro" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      </BrowserRouter>


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
