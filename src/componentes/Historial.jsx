import  { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Historial() {
    const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

    useEffect(() => {
        const cargarHistorial = () => {
        const historialGuardado = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
        setHistorialCotizaciones(historialGuardado);
    };

    cargarHistorial();
    }, []);

    const retornoTablaHTML = (fila) => {
        return (
            <tr key={fila.fechaCotizacion}>
                <td>{fila.fechaCotizacion}</td>
                <td>{fila.propiedad}</td>
                <td>{fila.ubicacion}</td>
                <td>{fila.metrosCuadrados}</td>
                <td>$ {fila.poliza.toLocaleString()}</td>
            </tr>
        );
    };

    return (
        <>
        <table className='table table-hover'>
            <thead>
            <tr>
                <th>Fecha de cotización</th>
                <th>Propiedad</th>
                <th>Ubicación</th>
                <th>Metros cuadrados</th>
                <th>Póliza mensual</th>
            </tr>
            </thead>
     
        <tbody>
            {historialCotizaciones.map((fila) => retornoTablaHTML(fila))}
            </tbody>
            </table>
            <div className="container-button">
                <Link to="/"><button class="button button-outline">VOLVER</button></Link>
            </div>
        </>
    );
}

export default Historial;