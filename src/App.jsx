import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./componentes/Header"
import Cotizador from "./componentes/Cotizador"
import Historial from "./componentes/Historial"


import './App.css'



function App() {  

  return (
    <>
      <Header titulo= "Cotizador de Inmuebles 🏡"/>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Cotizador}/>
        <Route path='/historial' Component={Historial}/>
      </Routes>
    </BrowserRouter>
      
     
      
    </>
      
      
   
  )
}

export default App
