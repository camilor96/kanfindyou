import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

function Footer(){
    return(
        <div className="o-footer">
            <div className="row">
            <div className="col-md-6 footerText">
                <h1>KanFindYou</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce blandit ornare urna nec pellentesque. Nullam et mauris 
                    neque. Integer at nulla nec ipsum vestibulum vehicula. Duis 
                    sit amet massa sed leo dapibus malesuada et eu orci. </p>
            </div>
            <div className="col-md-6 footerLinks">
                <div className="row">
                    <div className="col-md-12 links">
                        <div class="o-links-container">
                        <a class="o-link" href="#">Inicio</a>
                        <a class="o-link" href="#">Historial</a>
                        <a class="o-link" href="#">Accesorios para mascotas</a>
                        <a class="o-link" href="#">Servicio al cliente</a>
                        <a class="o-link" href="#">Ayuda</a>
                        </div>
                    </div>
                    <div className="col-md-12 social">
                        <div className="o-links-social">
                        <a className="o-link-red" href="#"><FaFacebook></FaFacebook></a>
                        <a className="o-link-red" href="#"><FaInstagramSquare></FaInstagramSquare></a>
                        </div>
                    </div>
                </div>


            </div>
            </div>
        </div>
    )
}

export default Footer;