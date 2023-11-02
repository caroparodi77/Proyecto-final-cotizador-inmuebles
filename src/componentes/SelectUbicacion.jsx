import { useContext } from "react";
import { AppContext } from "./AppContext";

function SelectUbicacion() {
    const { ubicaciones, form, setForm } = useContext(AppContext);
      console.log(ubicaciones);

  
    const handleChange = (event) => {
      console.log(event.target.value);
      const todo = ubicaciones.find((ubicacion) => ubicacion.id == event.target.value);
      console.log(todo);
  
      setForm({ ...form, todo });
    };
  
    return (
        <>
        <label htmlFor="todo">Seleccione su ubicacion: </label>
        <select name="todo" id="todo" onChange={handleChange} placeholder="Ubicación" required>
          <option value=""></option>
          {ubicaciones.map((ubicacion) => (
            <option key={ubicacion.id} value={ubicacion.id}>
              {ubicacion.tipo}
            </option>
          ))}
        </select>
      </>
    );
  }
  
  export default SelectUbicacion