import { useState } from 'react';
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
import PanelAdministracion from './Pages/FormularioProducto/FormularioProducto.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import ContactPage from './Pages/Contact/Contact.jsx';
import { CartProvider } from './Pages/Cart/CartContext.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import FoodAllergyForm from './Pages/foodAllergyForm/foodAllergyForm.jsx';
import UserPage from './Pages/Userpage/userpage.jsx'; {/*Página del usuario*/}
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';


function App() {

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='main-container'>
      <CartProvider>
        <BrowserRouter>
        <ScrollToTop />
          {showRegister && <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>}
          {showLogin && <SignIn setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
          <Navbar setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>
          <div className='main-content'>
            <Routes>
              <Route path="/" element={<Principalpage />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/beneficios" element={<Beneficios />} />
              <Route path='/panelAdministracion' element={<PanelAdministracion />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/formulario-alergias" element={<FoodAllergyForm />} />
              <Route path="/userpage" element={<UserPage />} /> {/*Página del usuario*/}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
