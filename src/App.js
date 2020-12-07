import logo from './logo.svg';
import NavBar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ContainerCards from './Components/ContainerCards/ContainerCards';
import Footer from './Components/Footer/Footer';
import RegistroUsuario from './Components/RegistroUsuario/RegistroUsuario';
import Mascota from './Components/Mascota/Mascota';
import RegistroCitas from './Components/Citas/RegistroCitas';
import { MdLocationOn } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { MdSearch } from "react-icons/md";
import { Component } from 'react';
import Imagenes from './Components/API/Imagenes';
import Imagenes2 from './Components/APICard/Imagenes2';


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="Container">

        <div className="o-navBar">
            <nav class="o-nav">
            <div className="o-ubicacion-container">
              <div className="row">
                <div className="col-6 col-md-6 iconLocation">
                <MdLocationOn></MdLocationOn>
                </div>
                <div className="col-6 col-md-6">
                <Form>
                <Form.Label>Ubicación</Form.Label>
                <Form.Control as="select">
                  <option>Cali</option>
                  <option>Bogotá</option>
                  <option>Medellín</option>
                  <option>Cartagena</option>
                  <option>Barranquilla</option>
                </Form.Control>

                </Form>
                </div>
              </div>
            </div>
            <div class="o-img-container">
                <h1>KanFindYou</h1>
            </div>
            <div className="o-buscardor">

            <Form>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                    Buscar
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text> <MdSearch></MdSearch> </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="Buscar" />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form>




            </div>
            <div class="o-buttons-container">
            <button class="o-button">Iniciar sesión</button>
            <button class="o-button o-button-call-to-action"><Link to="/registro" className="o-linkButtonR">Regístrate</Link></button>
            </div>
            </nav>
        </div>
        <div className="row">
        <div class="o-links-container col-md-12 text-center">
            <Link to="/" className="o-link">Inicio</Link>
            <a class="o-link" href="/#lista" className="o-link">Mascotas</a>
            <Link class="o-link o-link-special" to="/perros">Ellos ya tienen hogar</Link>
            <a class="o-link" href="#">Servicio al cliente</a>
            <a class="o-link" href="#">Ayuda</a>
            </div>
        </div>
{/*         <NavBar></NavBar> */}
          <Switch>
            <Route path="/" exact>
            <Header></Header>
            <div id="lista">
            <Imagenes2></Imagenes2>
            </div>
            </Route>
            <Route path="/inicio">
            <Header></Header>
            <div id="lista">
            <Imagenes2></Imagenes2>
            </div>
            </Route>
            <Route path="/registro">
            <RegistroUsuario></RegistroUsuario>
            </Route>
            <Route path="/perros">
            <Imagenes></Imagenes>
            </Route>
            <Route path="/citas">
            <RegistroCitas></RegistroCitas>
            </Route>
            <Route path="/mascota">
            <Mascota></Mascota>
            </Route>
          </Switch>
        
        </div>
        <Footer></Footer>
    </Router>
  );
}

export default App;
