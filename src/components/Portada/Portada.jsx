import "./Portada.css"
import React from "react"


const Portada = () => {
    return(
        

        <>
            <div className="img-fondo">
                <div className="title-container">
                        <h1 className="title">Mi primer añito</h1>
                        <h2 className="title2">Mateo</h2>
                        <img className="img-portada bounce-top" src="../../../imagenes/flecha-abajo.png" alt="img flecha" />
                        <img className="img-portada2 bounce-top" src="../../../imagenes/flecha-abajo.png"  alt="img flecha"/> 
                </div>
                    
                    {/* <img className="tittle-portada"src="https://fontmeme.com/permalink/230120/b9f43a7c2792c919fb11a8b0b373d199.png" alt="fuente-de-minions" border="0"/>
                    <img className="tittle-nombre"src="https://fontmeme.com/permalink/230120/bed7c313571c47d1645ec1b00b1b3f3a.png" alt="fuente-de-minions" border="0"/>
            */}
            </div>
        </>
    )
}

export default Portada