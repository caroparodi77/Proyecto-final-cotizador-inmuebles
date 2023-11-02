import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import Historial from "./componentes/Historial"
import Select from "./componentes/SelectProp"


import './App.css'



function App() {  

  return (
    <>
      <Header titulo= "Cotizador de Inmuebles 🏡"/>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Formulario}/>
        <Route path='/historial' Component={Historial}/>
      </Routes>
    </BrowserRouter>
      
     
      
    </>
      
      
   
  )
}

export default App
