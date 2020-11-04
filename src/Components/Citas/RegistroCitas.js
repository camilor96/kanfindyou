import React from "react";
import "./RegistroCitas.css";
import Button from 'react-bootstrap/Button'

function RegistroCitas() { 

    return (
        <div className="o-registroCita">
             <div className="o-grande">
             <div className="form-wrapper">
                <h1 className="titleRegistro">Programe su cita</h1>
                <form>
                <div className="nombre">
                <label htmlFor="nombre">Nombre</label>
                <input
                    placeholder="Nombre"
                    type="text"
                    name="nombre"
                />
                    </div>
                    <div className="apellido">
                <label htmlFor="apellido">Apellido:</label>
                <input
                    placeholder="Apellido"
                    type="text"
                    name="apellido"
                />
            </div>
            <div className="telefono">
            <label htmlFor="telefono">Teléfono:</label>
                <input
                    placeholder="teléfono"
                    type="text"
                    name="telefono"
                />
            </div>
           <div class="date">
                    <label for="dateof">Seleccione fecha para programar la cita</label>
                    <input id="fechaini"type="datetime-local"></input>
                        </div>
                        <div className="createAccount">
              <Button variant="primary">Confirmar Cita</Button>
              
            </div>

                    </form>
                </div>
                </div>
            </div>
     
    )
}

export default RegistroCitas;