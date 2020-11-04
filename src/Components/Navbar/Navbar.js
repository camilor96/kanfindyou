import React from "react";
import "./Navbar.css"

function NavBar(){
    return(
        <div className="o-navBar">
            <nav class="o-nav">
            <div class="o-img-container">
                <h1>KanFindYou</h1>
            </div>
        <div class="o-links-container">
            <a class="o-link" href="#">Inicio</a>
            <a class="o-link" href="#">Historial</a>
            <a class="o-link" href="#">Accesorios para mascotas</a>
            <a class="o-link" href="#">Servicio al cliente</a>
            <a class="o-link" href="#">Ayuda</a>
        </div>
        <div class="o-buttons-container">
            <button class="o-button">Iniciar sesión</button>
            <button class="o-button o-button-call-to-action">Regístrate</button>

        </div>
        <div class="o-mobile-nav">
            <button class="o-button">Menú</button>

        </div>
    </nav>
        </div>
    )
}

export default NavBar;