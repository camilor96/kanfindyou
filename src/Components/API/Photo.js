import React from 'react';
import "./Photo.css";

const Photo = (props) => {
    
    return (<div className="col-6 col-md-3"> 
        <img className="o-img-mascota" src={props.url} alt="foto-perro"/>
    </div>)
}
export default Photo