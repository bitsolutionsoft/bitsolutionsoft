import logo from '../assets/img/logo.svg';
import fon from '../assets./img/codesk.png';
import './../css/principal.css';

function Principal() {
  return (
    <div>
    <div className="Menu">
         <p className="Title">Codesk</p> 
        <ul>
  
  <li><a href="#Quienes" >¿Quienes somos?</a></li>
  <li><a href="#Productos"  >Productos</a></li>
  <li><a href="#Servicios" >Servicios</a></li>
  <li><a href="#Contactos" >Contactos</a></li>
</ul>


        </div>  
    <div className="App" id="Quienes">    
      <div className="Quienes">
      <p className="SeccTitle">
         ¿Quiénes Somos? 
        </p>
        <p className="Desc">
          Somos una empresa dedicado al desarrollo de sistema 
          informatico, sitio web. 
        </p>
         </div>
      </div>   

      <div className="Producto" id="Productos">
        <img src={logo} className="App-logo" alt="logo" />
         <p className="SeccTitle">
         Productos
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className="Servicios" id="Servicios">
        <img src={logo} className="App-logo" alt="logo" />
         <p className="SeccTitle">
       Servicios
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className="Contactos" id="Contactos">
        <img src={codesk} className="App-logo" alt="logo" />
         <p className="SeccTitle">
        Contactos
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
       
       
       
   
   
    </div>
  );
}

export default Principal;
