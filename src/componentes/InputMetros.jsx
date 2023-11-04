export function InputMetros({handleChange}) {


return (

<div className="col-md">
            <div className="form-floating">
                <div>
                    <label htmlFor="metros2">Ingresa los metros cuadrados</label>
                </div>
                    <input className= "input" type="number" id="metros2" onChange={handleChange}
                    min="20" required
                    />
            </div>
        </div>
         )  
};       