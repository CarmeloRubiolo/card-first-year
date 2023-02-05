import React from "react"
import "./Footer.css"

const Footer = () => {

    const imgStyle = {
        height: "100px",
        width: "auto",
    }
    const title = {
        color: "white",
        fontSize: "15px"
    }

    return(
        <>
        <footer className="mt-5">
                <div>
                    <img style={imgStyle} src="../../../imagenes/LogoMelo2.png" alt="logo-Melo" />
                    <div class="contactarse">
                        <h6 style={title}>
                            ¿ Quieres una invitación para tu evento ?
                            <a href="https://walink.co/69e5d2"> Contactate aquí</a>
                        </h6>
                    </div>
                </div>
        </footer>
        </>
    )
}

export default Footer
