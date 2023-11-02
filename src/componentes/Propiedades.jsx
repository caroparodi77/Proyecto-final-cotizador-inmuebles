import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function  Propiedades() {

    const [propiedades, setPropiedades] = useState([]);

    useEffect(() => {
      fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
        .then((res) => res.json())
        .then((datos) => setPropiedades(datos));
    }, []);

    function tipoPropiedad () {
        const [propiedad, setPropiedad] = useState ('');

        const propiedadElegida = () => {
            setPropiedad(propiedad.tipo);
        }
    }

    return (
          
           
         
             <div className="col-md">
                <div className="form-floating">
                     <div>
                          <label for="floatingInputGrid" htmlFor="propiedad">Selecciona el tipo de propiedad</label>
                     </div>          
                     <select>
                        {propiedades.map((propiedad) => (
                        <option value={"propiedad" + propiedad.id}>{propiedad.tipo}</option>
                         ))}
                     </select>
                </div>
             </div>
         
            
      
                  
    ) 
                        };                           

export default Propiedades;