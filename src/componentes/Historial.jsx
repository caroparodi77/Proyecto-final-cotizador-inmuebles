import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Historial() {
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);
  const historial = JSON.parse(
    window.localStorage.getItem("historial") || "[]"
  );

  useEffect(() => {
    const cargarHistorial = () => {
      const historialGuardado =
        JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
      setHistorialCotizaciones(historialGuardado);
    };

    cargarHistorial();
  }, []);

  const retornoTablaHTML = (fila) => {
    return (
      <tr key={fila.fecha}>
        <td>{fila.fecha}</td>
        <td>{fila.propiedad}</td>
        <td>{fila.ubicacion}</td>
        <td>{fila.metros2}</td>
        <td>$ {fila.cotizacion}</td>
      </tr>
    );
  };

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Fecha de cotización</th>
            <th>Propiedad</th>
            <th>Ubicación</th>
            <th>Metros cuadrados</th>
            <th>Póliza mensual</th>
          </tr>
        </thead>

        <tbody>{historial.map((fila) => retornoTablaHTML(fila))}</tbody>
      </table>
      <div className="container-button">
        <Link to="/">
          <button className="button button-outline">VOLVER</button>
        </Link>
      </div>
    </>
  );
}

export default Historial;
