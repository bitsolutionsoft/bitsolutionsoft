import {useEffect, useState} from 'react'
import logo from '../assets/img/Recurso7.png';
import img1 from '../assets/img/img1.png';
import {FaPhoneAlt,FaFacebookSquare,FaWhatsapp,FaRegEnvelope,FaBars} from 'react-icons/fa';
import './principal.css';


import Producto from './../productos/Producto';
import Servicios from './../servicios/Servicios';

const colorIcon="darkmagenta";
function Principal() {
  const [click, setclick] = useState(false);
  const [navBar, setnavBar] = useState(true);
  const [lastScrollTop, setlastScrollTop] = useState(0);
  const [Button, setButton] = useState(true);
  const [numOp, setnumOp] = useState(1)
  const [backNav, setbackNav] = useState("Menu")
  const [titulo, settitulo] = useState("Codesk")
  const [optMenu, setoptMenu] = useState('Option OptionHide')
  


const showButton =()=>{
if(window.innerWidth <= 960){
  setButton(false);
}else{
  setButton(true);
}
}

function active(index) {
toogleMenu("Option OptionHide")
  switch(index){
      case 1:
       // settitulo("Codesk")
      //  setbackNav("Menu QuinesActive");
        setnumOp(1)
        break;
        case 2:
          setnumOp(2);
      //    setbackNav("Menu ProductoActive")
        //  settitulo("Producto")
          break;
          case 3:
        //setbackNav("Menu ServicioActive")
            setnumOp(3);
          //  settitulo("Servicios")
            break;
            case 4:
            //  settitulo("Conctatos")
        //      setbackNav("Menu ContactoActive")
              setnumOp(4);
              break;
            default:
              settitulo("Codesk")
              setnumOp(1);
     //         setbackNav("Menu");
              break;
  }
  
}

  window.addEventListener('resize', showButton);
  const ChangeColor=()=>{
    const currentScrollTop=window.scrollY;
    if(currentScrollTop < lastScrollTop){
      setnavBar(true);
    }else {
      setnavBar(false)
    }
    setlastScrollTop(currentScrollTop);
  }

  // mostrar y ocultar nav bar
  //window.addEventListener("scroll", ChangeColor)

  useEffect(() => {
 
 

  }) 
  const toogleMenu=(opcion)=>{
setoptMenu(opcion)


  }
  // <div className={navBar ? 'Menu active' : 'Menu'}>
  
  return (
    <div className="contain">
   
    <div className={navBar ? "Menu" : "MenuFalse"}>
      <div className="ItemTitle">
    <img src={logo} className="Logo" alt="logo" />
         <p className="Title">{titulo}</p> 
         </div>
        <ul className={optMenu}>
  
  <li><a href="#Quienes" className={numOp === 1 ? 'activeOp' : ''}  onClick={()=>active(1)} >¿Quienes somos?</a></li>
  <li><a href="#Productos" className={numOp === 2 ? 'activeOp' : ''}  onClick={()=>active(2)} >Productos</a></li>
  <li><a href="#Servicios" className={numOp === 3 ? 'activeOp' : ''}  onClick={()=>active(3)} >Servicios</a></li>
  <li><a href="#Contactos" className={numOp === 4 ? 'activeOp' : ''}  onClick={()=>active(4)}>Contactos</a></li>

</ul>
<FaBars size={30} color={colorIcon} className="ButtonMenu" onClick={()=>toogleMenu("Option OptionShow")}/>


        </div>  
       
      <div className="Quienes" id="Quienes"  onMouseEnter={()=>active(1)}>
      
     
        <div className="SeccQuienes">
          <div>
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
         </div>
         
         <div className="SeccLogo">
         <img src={img1} className="img1" alt="img1" />
         </div> 

       
         </div>
      <div className="Producto" id="Productos"  
      onMouseEnter={()=>active(2)}
      >
        <p className="SeccTitle">Productos</p>
        <p className="SeccDesc">Contamos con los mejores productos, para hacer que su negocio este a la varguarda de la tecnología.</p>
     <Producto/>
      </div>

      <div className="Servicios" id="Servicios"
       onMouseEnter={()=>active(3)}
      >
         <p className="SeccTitle">Servicios</p>
        <p className="SeccDesc">Contamos con personal calificado y con amplio conocimiento en la tecnología, para brindarle el mejor servicios.</p>
   <Servicios/>

      </div>
      <div className="Contactos" id="Contactos"  onMouseEnter={()=>active(4)}>
     <p className="SeccTitle">Contactos</p>
          <p className="SeccDesc">Contactanos en cualquiera de estos medios:</p>
         
        <div className="containCon">

          <div className="seccCon">
          <a href=" ">
         <FaPhoneAlt size={50} color={colorIcon} />
         </a>
          <p>
            3344-5566 / 4433-9080
          </p>
          </div>
          <div className="seccCon">
            <a href="https://api.whatsapp.com/send?phone=+50236211663">
         <FaWhatsapp size={50} color={colorIcon}/>
         </a>
          </div>
          <div className="seccCon">
            <a href=" " >
          <FaFacebookSquare size={50} color={colorIcon}/>
         </a>
          </div>
          <div className="seccCon">
            <a href=" ">
          <FaRegEnvelope size={50} color={colorIcon}/>
         </a>
          </div>
         
        </div>
    
      </div>
       
       
       
     
   
    </div>
  );
}

export default Principal;
