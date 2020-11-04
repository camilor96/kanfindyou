import React from "react";
import "./ContainerCards.css"
import CardDog from '../Card/CardDog';

function ContainerCards(){
    return(
        <div className="o-containerCards row">
            <div className="col-12 col-md-12">
            <h1 className="titleCards">¡Adoptame!</h1>
            </div>
            <CardDog></CardDog>
            <CardDog></CardDog>
            <CardDog></CardDog>
            <CardDog></CardDog>
        </div>
    )
}

export default ContainerCards;