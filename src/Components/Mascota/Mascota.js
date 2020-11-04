import React from "react";
import "./Mascota.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function Mascota(){
    return(
        <div className="o-mascota row">
            
                <div className="col-md-6 imgContainer">
                    <img src="https://vignette.wikia.nocookie.net/razasdeperros4226/images/1/13/Poodle.jpg/revision/latest/scale-to-width-down/340?cb=20170324000440&path-prefix=es" alt=""/>
                </div>
                <div className="col-md-6 infoContainer">
                    <h1>Hola, soy Luna</h1>
                    <p><strong>Edad de la Mascota:</strong> 8 meses</p>
                    <p><strong>Descripción:</strong> 
                        Black es un lindo cachorrito,tierno,amoroso y muy dulce. Requisitos para la adopcion:
                        - Seguimiento continuo por medio de fotos y videos
                        - Que se les puedan brindar sus necesidades básicas :
                        visitas al veterinario cuando sea necesario, vacunas alimentación un techo y mucho amor!!!!
                        Preferiblemente casa o apartamento (no finca)</p>

                    <p><strong>Fecha de publicación:</strong> Octubre 31, 2020</p>
                    <p><strong>Ubicación:</strong> Cachipay, Cundinamarca, Colombia</p>
                    <Button variant="primary"><a className="buttonAdoptame" href="/registro">Adoptame</a></Button>   
                    
                
                </div>
        </div>
    )
}

export default Mascota;