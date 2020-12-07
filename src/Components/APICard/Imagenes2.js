import PhotoContainer2 from './PhotoContainer2';
import { Component } from 'react';

class Imagenes2 extends Component{
    constructor() {
        super();
        this.state = {
          photos:[]
        };
    
    }

    componentDidMount() { 
        fetch("https://api.thedogapi.com/v1/images/search?limit=4")
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
            <PhotoContainer2 photos={this.state.photos}/>
         </section> 
        );
    
      }
    
}
export default Imagenes2;