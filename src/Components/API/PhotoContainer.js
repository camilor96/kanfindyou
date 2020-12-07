import React from 'react';
import Photo from './Photo'


const PhotoContainer = props => {
    
    const displayPhotos = () => {
        return props.photos.map(photo => {
            return ( 
            <Photo url={photo.url} />
            )
        });
    };
        return (<div className="row">{ displayPhotos()}</div>);
    
};
export default PhotoContainer