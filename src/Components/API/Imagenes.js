import PhotoContainer from './PhotoContainer';
import { Component } from 'react';

class Imagenes extends Component{
    constructor() {
        super();
        this.state = {
          photos:[]
        };
    
    }

    componentDidMount() { 
        fetch("https://api.thedogapi.com/v1/images/search?limit=12")
          .then(response => {
            console.log('response', response);
            if (!response.ok) {
              throw Error("no salio la imagen");
            }
            return response.json()
            .then(allData => {
              this.setState({ photos: allData });
            })
              .catch(err => {
                throw Error(err.message);
              });
          });
      }
      render() {
        return (
          <section className="app-perr">
            <br/>
            <h1>Estos peluditos ya encontraron su hogar ¡ADOPTA EL TUYO!</h1>
            <br/>
            <PhotoContainer photos={this.state.photos}/>
         </section> 
        );
    
      }
    
}
export default Imagenes;