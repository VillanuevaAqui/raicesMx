//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import Register from './Pages/Register/Register.jsx';
//import TitleCard from './components/TitleCard/TitleCard.jsx';
//import Button from './components/Button/Button.jsx';
//import TitleBanner from './components/Title-banner/TitleBanner.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import Nosotros from './Pages/Nosotros/Nosotros.jsx';
import Beneficios from './Pages/Beneficios/Beneficios.jsx';
import Principalpage from "./Pages/Principalpage/Principalpage.jsx"
import ContactPage from './Pages/Contact/Contact.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Principalpage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
       { /* <Route path="/beneficios" element={<Beneficios />} /> */}
        <Route path="/registro" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Footer />
      <Routes>
         <Route path="/contacto" element={<ContactPage />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
