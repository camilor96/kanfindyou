import React from "react";
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function Header(){
    return(

            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/purina-que-debes-saber-de-los-perros-en-adopcion.jpg?itok=AxABef6Q"
                alt="Adopta No Compres"
                />
                <Carousel.Caption>
                <h3>Adopta No Compres</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.animanaturalis.org/img/pages/full/202005/P11-69542.jpg"
                alt="Adopta una Mascota"
                />

                <Carousel.Caption>
                <h3>Adopta una Mascota</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/mascotas-en-adopcion-beneficios-y-requisitos-para-adoptar-un-perro-o-gato.png?itok=1zwxudDH"
                alt="Ellos te necesitan"
                />

                <Carousel.Caption>
                <h3>Ellos te necesitan</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}

export default Header;