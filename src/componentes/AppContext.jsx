import { createContext, useCallback, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [form, setForm] = useState({});
  const [cotizacion, setCotizacion] = useState();
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((response) => response.json())
      .then((todos) => setPropiedades(todos));
  }, []);

  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
      .then((response) => response.json())
      .then((todos) => setUbicaciones(todos));
  }, []);

  const handleSelect = useCallback(
    ({ target: { value, name } }) => {
      const array = name === "propiedades" ? propiedades : ubicaciones;
      const item = array.find(({ id }) => id == value);
      setForm({ ...form, [name]: item });
    },
    [form, propiedades, ubicaciones]
  );

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setForm({ ...form, metros: Number(value) });
    },
    [form]
  );

  const handleSubmit = useCallback(() => {
    const resultado =
      35.86 * form.propiedades.factor * form.ubicaciones.factor * form.metros;
    const historial = JSON.parse(
      window.localStorage.getItem("historial") || "[]"
    );
    window.localStorage.setItem("historial", JSON.stringify([
      ...historial,
      {
        fecha: new Date().toLocaleString(),
        propiedad: form.propiedades.tipo,
        ubicacion: form.ubicaciones.tipo,
        metros2: form.metros,
        cotizacion: resultado.toFixed(2),
      },
    ]));
    setCotizacion(resultado.toFixed(2));
    console.log(form, resultado);
  }, [form]);

  const data = {
    cotizacion,
    propiedades,
    form,
    ubicaciones,
    setForm,
    handleSelect,
    handleChange,
    handleSubmit,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
