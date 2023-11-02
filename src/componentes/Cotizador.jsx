import React from "react";
import Propiedades from "./Propiedades";
import Ubicaciones from "./Ubicaciones";
import Metros from "./Metros";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function Cotizador() {  

    return (
      <>
          <div className="subtitulo">
            <h2 className="subtitulos">Completa los datos solicitados</h2>  
          </div>
          <div className= "container-cotizador">
            
            <div className="column g-3">
            <Propiedades/>
            <Ubicaciones/>
            <Metros/>
            <div className="container-button">
            <button type="button" className="btn btn-primary btn-lg">Cotizar</button>
        </div>
        <div className="importe">
        <p className="importe">Precio estimado: $ <span id="valorPoliza">0.00</span><span className="guardar ocultar" title="Guardar en historial">💾</span></p>
    </div>
    <div className="historial"><Link to="Historial">
        <span title="Ver Historial">📋</span></Link>
    </div>
            
            </div> 
        </div>
        
      </>
    )
  }
  
  export default Cotizador
  