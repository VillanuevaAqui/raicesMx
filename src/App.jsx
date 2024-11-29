import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>


      <Footer/>
    </>
  )
}

export default App
