import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Metros () {
        const [metros, setMetros] = useState (0);

        const metrosElegidos = () => {
            setMetros(Metros);
        }
   

    return (
        <div className="col-md">
            <div className="form-floating">
                <div>
                    <label for="floatingInputGrid" htmlFor="metros2">Ingresa los metros cuadrados</label>
                </div>
                    <input className= "input" type="number" id="metros2" onChange={(e) => Metros(e.target.value)}
                    min="20" required
                    />
            </div>
        </div>                                   

    )
};

export default Metros;