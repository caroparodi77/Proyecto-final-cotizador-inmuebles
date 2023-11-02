import { createContext } from "react";

export const ProductosContext = createContext();

export const ProductosProvider= ({children}) => {
    const productos = [
        {"id":"1","tipo":"Casa","factor":1.09},
        {"id":"2","tipo":"P.H.","factor":1.05},
        {"id":"3","tipo":"Depto. Edificio","factor":1.02},
        {"id":"4","tipo":"Barrio Privado","factor":1.19},
        {"id":"5","tipo":"Oficina","factor":2.39},
        {"id":"6","tipo":"Local Comercial","factor":1.41},
        {"id":"7","tipo":"Depósito Logística","factor":1.92}
    ];
    const data = {productos};

    return (
     <ProductosContext.Provider value={data}>
        {children}
        </ProductosContext.Provider>
    );

};
