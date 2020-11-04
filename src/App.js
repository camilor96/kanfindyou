import logo from './logo.svg';
import NavBar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ContainerCards from './Components/ContainerCards/ContainerCards';
import Footer from './Components/Footer/Footer';
import RegistroUsuario from './Components/RegistroUsuario/RegistroUsuario';
import Mascota from './Components/Mascota/Mascota';
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
        <div className="App">

        <div className="o-navBar">
            <nav class="o-nav">
            <div class="o-img-container">
                <h1>KanFindYou</h1>
            </div>
            <div class="o-links-container">
            <Link to="/" className="o-link">Inicio</Link>
            <a class="o-link" href="/#lista" className="o-link">Mascotas</a>
            <a class="o-link" href="#">Accesorios para mascotas</a>
            <a class="o-link" href="#">Servicio al cliente</a>
            <a class="o-link" href="#">Ayuda</a>
            </div>
            <div class="o-buttons-container">
            <button class="o-button">Iniciar sesión</button>
            <button class="o-button o-button-call-to-action"><Link to="/registro" className="o-linkButtonR">Regístrate</Link></button>
            </div>
            <div class="o-mobile-nav">
            <button class="o-button">Menú</button>

            </div>
            </nav>
        </div>
{/*         <NavBar></NavBar> */}
          <Switch>
            <Route path="/" exact>
            <Header></Header>
            <div id="lista">
            <ContainerCards></ContainerCards>
            </div>
            </Route>
            <Route path="/inicio">
            <Header></Header>
            <div id="lista">
            <ContainerCards></ContainerCards>
            </div>
            </Route>
            <Route path="/registro">
            <RegistroUsuario></RegistroUsuario>
            </Route>
            <Route path="/mascota">
            <Mascota></Mascota>
            </Route>
          </Switch>
        <Footer></Footer>
        </div>
    </Router>
  );
}

export default App;
