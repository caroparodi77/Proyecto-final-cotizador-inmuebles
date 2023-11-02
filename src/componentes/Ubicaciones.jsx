import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function  Ubicaciones() {

    const [ubicaciones, setUbicaciones] = useState([]);

    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
          .then((res) => res.json())
          .then((datos) => setUbicaciones(datos));
      }, []);

 function tipoUbicacion () {
        const [ubicacion, setUbicacion] = useState ('');

        const ubicacionElegida = () => {
            setUbicacion(ubicacion.tipo);
        }
    }

    return (

        <div className="col-md">
            <div className="form-floating">
                <div>        
                    <label for="floatingInputGrid" htmlFor="ubicación">Selecciona su ubicación</label>
                </div>              
                <select>
                    {ubicaciones.map((ubicacion) => (
                    <option value={"ubicacion" + ubicacion.id}>{ubicacion.tipo}</option>
                    ))}
                </select>
            </div>
        </div>
  
         
) 
               };                           

export default Ubicaciones;