import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductosProvider } from './componentes/ProductosProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
    <App />
    </ProductosProvider>
  </React.StrictMode>,
)
