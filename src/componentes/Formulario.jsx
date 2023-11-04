import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InputMetros } from "./InputMetros";

import { AppContext } from "./AppContext";

function Formulario() {
  const { propiedades, handleSelect, ubicaciones, handleChange, handleSubmit, cotizacion } =
    useContext(AppContext);

  return (
    <form>
      <div className="subtitulo">
        <h2 className="subtitulos">Completa los datos solicitados</h2>
      </div>
      <div className="container-formulario">
        <div className="column g-3">
          <label htmlFor="todo">Seleccione el tipo de Propiedad: </label>
          <select
            name="propiedades"
            id="propiedades"
            onChange={handleSelect}
            required
          >
            <option>Seleccione Propiedad</option>
            {propiedades.map((propiedad) => (
              <option key={propiedad.id} value={propiedad.id}>
                {propiedad.tipo}
              </option>
            ))}
          </select>
          <label htmlFor="todo">Seleccione el tipo de Ubicacion: </label>

          <select
            name="ubicaciones"
            id="ubicaciones"
            onChange={handleSelect}
            required
          >
            <option>Seleccione Ubicación</option>
            {ubicaciones.map((ubicacion) => (
              <option key={ubicacion.id} value={ubicacion.id}>
                {ubicacion.tipo}
              </option>
            ))}
          </select>

          <InputMetros handleChange={handleChange} />

          <div className="container-button">
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary btn-lg"
            >
              Cotizar
            </button>
          </div>
          <div className="importe">
            <p className="importe">
              Precio estimado: $ <span id="valorPoliza">{cotizacion || '0.00'}</span>
            </p>
          </div>
          <div className="historial">
            <Link to="Historial">
              <span title="Ver Historial">📋 Ver Historial</span>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Formulario;
