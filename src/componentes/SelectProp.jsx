import { useContext } from "react";
import { AppContext } from "./AppContext";

function SelectProp() {
    const { opciones, form, setForm } = useContext(AppContext);
      console.log(opciones);
  
    const handleChange = (event) => {
      console.log(event.target.value);
      const todo = opciones.find((opcion) => opcion.id == event.target.value);
      console.log(todo);
  
      setForm({ ...form, todo });
    };
  
    return (
      <>
        <label htmlFor="todo">Seleccione el tipo de Propiedad: </label>
        <select name="todo" id="todo" onChange={handleChange} placeholder="Tipo de propiedad" required>
          <option value=""></option>
          {opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.tipo}
            </option>
          ))}
        </select>
      </>
    );
  }
  
  export default SelectProp