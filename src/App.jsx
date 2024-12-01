import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignIn from './components/Pages/SignIn/SignIn.jsx';
import Register from './components/Pages/Register/Register.jsx';
import Menu from './components/Pages/Menu/Menu.jsx';
import Nosotros from './components/Pages/Nosotros/Nosotros.jsx';
// import Contact from './components/Pages/Contact/Contact.jsx';
import Principalpage from './components/Pages/Principalpage/Principalpage.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Principalpage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/*<Route path="/beneficios" element={<Beneficios />} /> */}
        <Route path="/registro" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Footer />
      <Routes>
        {/* <Route path="/contacto" element={<Contact />} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
