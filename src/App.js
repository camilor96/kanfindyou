import logo from './logo.svg';
import NavBar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ContainerCards from './Components/ContainerCards/ContainerCards';
import Footer from './Components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <ContainerCards></ContainerCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
