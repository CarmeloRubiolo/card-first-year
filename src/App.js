import React from 'react';
import Portada from "./components/Portada/Portada";
import CuentaRegresiva from "./components/CuentaRegresiva/CuentaRegresiva.jsx";
import Ubicacion from "./components/Ubicacion/Ubicacion.jsx"
import Fotos from "./components/Fotos/Fotos.jsx"
import ConfirmarAsistencia from "./components/ConfirmarAsistencia/ConfirmarAsistencia"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    <>
      <Portada />
      <CuentaRegresiva />
      <Ubicacion />
      <Fotos />
      <ConfirmarAsistencia />
      <Footer />
    </>
  );
}

export default App;
