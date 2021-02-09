import logo from '../assets/img/Recurso.png';
import codesk from '../assets/img/Recurso.png';
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
      <p className="SeccTitle1">
         ¿Quiénes Somos? 
        </p>
        <p className="Desc">
          Somos una empresa de desarrollo de sistemas 
          informaticos, sitios web y aplicaciones móviles 
          con las últimas tecnologías, brindando a nuestros clientes
          las herramientas necesarias para hacer crecer sus negociosos 
          o servicios.
        </p>
         </div>
         <div className="SeccLogo">
         <img src={logo} className="Logo" alt="logo" />
         </div>
      </div>   

      <div className="Producto" id="Productos">
       
         <p className="SeccTitle">
         Productos
        </p>
        
      </div>
      <div className="Servicios" id="Servicios">
   
         <p className="SeccTitle">
       Servicios
        
        </p>

      </div>
      <div className="Contactos" id="Contactos">
      
         <p className="SeccTitle">
        Contactos
        
        </p>
      
      </div>
       
       
       
   
   
    </div>
  );
}

export default Principal;
