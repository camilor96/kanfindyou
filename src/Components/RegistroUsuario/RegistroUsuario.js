import React from "react";
import "./RegistroUsuario.css";
import Button from 'react-bootstrap/Button'

   

function RegistroUsuario() {
    
    
    return(
        <div className="o-registroUsuario">
            <div className="o-grande">
            <div className="form-wrapper">
                <h1 className="titleRegistro"> Crea tu cuenta </h1>
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
            <div className="e-mail">
            <label htmlFor="email">Email:</label>
                <input
                    placeholder="Email"
                    type="text"
                    name="email"
                />
            </div>
            <div className="password">
            <label htmlFor="password">Contraseña</label>
                <input
                    placeholder="Contraseña"
                    type="text"
                    name="password"
                />
                    </div>
                    <div className="createAccount">
                    <Button variant="primary"><a className="cuentaButton" href="/citas">Registro</a></Button>
              <small>Ya posees una cuenta ?</small>
            </div>
                </form>
                </div>
                </div>
        </div>
    )
}

export default RegistroUsuario;