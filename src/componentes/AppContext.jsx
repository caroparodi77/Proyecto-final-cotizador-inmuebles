// import { createContext } from "react";

// export const ProductosContext = createContext();

// export const ProductosProvider= ({children}) => {
//     const productos = [
//         {"id":"1","tipo":"Casa","factor":1.09},
//         {"id":"2","tipo":"P.H.","factor":1.05},
//         {"id":"3","tipo":"Depto. Edificio","factor":1.02},
//         {"id":"4","tipo":"Barrio Privado","factor":1.19},
//         {"id":"5","tipo":"Oficina","factor":2.39},
//         {"id":"6","tipo":"Local Comercial","factor":1.41},
//         {"id":"7","tipo":"Depósito Logística","factor":1.92}
//     ];
//     const data = {productos};

//     return (
//      <ProductosContext.Provider value={data}>
//         {children}
//         </ProductosContext.Provider>
//     );

// };
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [form, setForm] = useState({});

  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((response) => response.json())
      .then((todos) => setOpciones(todos));
  }, []);

  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
      .then((response) => response.json())
      .then((todos) => setUbicaciones(todos));
  }, []);

  const data = { opciones, form, ubicaciones, setForm };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};