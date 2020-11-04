import logo from './logo.svg';
import NavBar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ContainerCards from './Components/ContainerCards/ContainerCards';
import Footer from './Components/Footer/Footer';
import RegistroUsuario from './Components/RegistroUsuario/RegistroUsuario'
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
        <NavBar></NavBar>
          <Switch>
            <Route path="/" exact>
            <Header></Header>
            <ContainerCards></ContainerCards>
            </Route>
            <Route path="/inicio">
            <Header></Header>
            <ContainerCards></ContainerCards>
            </Route>
            <Route path="/registro">
            <RegistroUsuario></RegistroUsuario>
            
            </Route>
          </Switch>
        <Footer></Footer>
        </div>
    </Router>
  );
}

export default App;
