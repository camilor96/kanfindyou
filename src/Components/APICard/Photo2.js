import React from 'react';
import "../API/Photo.css";
import Photo from './Photo2'
import "../Card/CardDog.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Component } from 'react';


const Photo2 = (props) => {
    
    return (
        <div className="o-card">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" id="dog_result" className="results o-img-card-2" src={props.url}/>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <p>Hola, Soy Luna</p>
            <p><strong>Edad:</strong> 9 años</p>
            <p><strong>Cachipay (Cundinamarca)
            Octubre 31, 2020</strong></p>
            </Card.Text>
                    <Button variant="primary"><a className="linkMascota" href="/mascota">Adoptame</a></Button><br></br><br></br>
                    <Button variant="primary" id="dog_btn"><a className="linkMascota">Ver mas</a></Button>
        </Card.Body>
        </Card>
        </div>
    )
}
export default Photo2