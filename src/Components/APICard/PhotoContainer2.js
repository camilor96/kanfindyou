import React from 'react';
import Photo2 from './Photo2'
import "../ContainerCards/ContainerCards.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Component } from 'react';


const PhotoContainer2 = props => {
    
    const displayPhotos2 = () => {
        return props.photos.map(photo => {
            return ( 
            <Photo2 url={photo.url} />
            )
        });
    };
        return (
            <div className="o-containerCards row">
            <div className="col-12 col-md-12">
            <h1 className="titleCards">¡Adoptame!</h1>
            </div>
            { displayPhotos2()}
        </div>
        );
    
};
export default PhotoContainer2