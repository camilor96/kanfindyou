import React from "react";
import "./CardDog.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function CardDog(){
    return(
        <div className="o-card">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://vignette.wikia.nocookie.net/razasdeperros4226/images/1/13/Poodle.jpg/revision/latest/scale-to-width-down/340?cb=20170324000440&path-prefix=es" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p>Hola, Soy Luna</p>
            <p><strong>Edad:</strong> 9 años</p>
            <p><strong>Cachipay (Cundinamarca)
            Octubre 31, 2020</strong></p>
            </Card.Text>
            <Button variant="primary"><a className="linkMascota" href="/mascota">Adoptame</a></Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default CardDog;