import logo from './Imagenes/logo1.png';
import './App.css';
import Navbar from './componentes/menu';

function App() {
  return (
    <div className="App">
      <header className="logo-container">
      <img src={logo} alt="Logo de mi aplicación" className="logo" />

      <Navbar />
      {/* Agrega el resto del contenido de tu aplicación */}

        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}

export default App;
