//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import Register from './Pages/Register/Register.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import Nosotros from './Pages/Nosotros/Nosotros.jsx';
import Beneficios from './Pages/Beneficios/Beneficios.jsx';
import Principalpage from "./Pages/Principalpage/Principalpage.jsx"
import FormularioProducto from './Pages/FormularioProducto/FormularioProducto.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import ContactPage from './Pages/Contact/Contact.jsx';
import { CartProvider } from './Pages/Cart/CartContext.jsx';
import Cart from './Pages/Cart/Cart.jsx';


function App() {

  return (
    <div className='main-container'>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <div className='main-content'>
          <Routes>
            <Route path="/" element={<Principalpage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/FormularioProducto' element = {<FormularioProducto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
