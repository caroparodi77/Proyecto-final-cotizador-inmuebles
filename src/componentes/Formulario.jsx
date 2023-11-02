import React from "react";
import SelectProp from "./SelectProp";
import SelectUbicacion from "./SelectUbicacion";
import Metros from "./Metros";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Formulario() {  

    return (
      <>
          <div className="subtitulo">
            <h2 className="subtitulos">Completa los datos solicitados</h2>  
          </div>
          <div className= "container-formulario">
            
            <div className="column g-3">
            <SelectProp/>
            <SelectUbicacion/>
            <Metros/>
            <div className="container-button">
            <button type="button" className="btn btn-primary btn-lg">Cotizar</button>
        </div>
        <div className="importe">
        <p className="importe">Precio estimado: $ <span id="valorPoliza">0.00</span><span className="guardar ocultar" title="Guardar en historial">💾</span></p>
    </div>
    <div className="historial"><Link to="Historial">
        <span title="Ver Historial">📋 Ver Historial</span></Link>
    </div>
            
            </div> 
        </div>
        
      </>
    )
  }
  
  export default Formulario
  