import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight,FaChevronLeft,} from 'react-icons/fa';
//import logo from "../assets/img/Recursos.png";
import "./producto.css";
//import codesk from "../assets/img/Recurso.png";
import cap1 from '../assets/img/4115319.png';
import cap2 from "../assets/img/4115336.png";
import cap3 from "../assets/img/3528495.png";


//const cap1 = "https://www.freepik.es/vector-gratis/ilustracion-concepto-pago-efectivo_9233825.htm#page=1&query=cajero%20ilustraciones&position=4";


function Producto() {
  const [imgActual, setimgActual] = useState(0);
  const [seconds, setseconds] = useState(0)
  const [limitSec, setlimitSec] = useState(6)
  const [dot, setdot] = useState(0)
  const data = [

    {
      title: "Punto de Venta",
      descripcion:
        "Es sistema de escritorio, permite el maneno de stock y realizar venta de  forma facil y rapido manteniendo actualizado el stock",
      img: cap1,
    },
    {
      title: "Sitio web",
      descripcion:
        "Sitio web para administrar de forma facil y efectiva los clientes y sus pagos correspondientes de los servicios contratados",
      img: cap2,
    },
    {
      title: "Aplicación móvil ",
      descripcion:
        "Aplicacion móvil que permite ayudar a las persona a realizar tareas escenciales, brinda una  ayuda a las persona con deficit de concetración",
      img: cap3,
    },
   
  ];
const colorIcon="darkmagenta";

const Dots=()=>{
  return(
    <div className="containDots">{
  data.map((index,key) => {
    return <div className ={dot === key ? "dots dotsActive" : 'dots'} key ={key} onClick={()=>current(key)}></div>
  })
  
}
  </div>
  )
}

function current(index) {
  setimgActual(index);
  setdot(index);
  setseconds(0)
}
useEffect(() => {
  setTimeout(() => {
setseconds(seconds+1)
    if(seconds===limitSec){
    if(imgActual< data.length-1)
    {
    current(imgActual+1)
    
}else{
  current(0)
}
  
}
  }, 1000);
})


  const preView=()=>{
if (imgActual > 0){
    current(imgActual -1);
    
}else{
    current(data.length-1);
    
}
  }
  
const nextView=()=>{
    if (imgActual < data.length-1){
        current(imgActual + 1);
        
    }  else{
        
    } 
}

  return (
    <div className="container">
      <div className="Card">
        <img className="imgCard" src={data[0].img} alt="imgCard"/>
        <p className="titleCard"  >{data[0].title}</p>
        <p className="descCard">{data[0].descripcion}</p>
        <a className="buttonCard" href="# ">Ver</a>
      </div>
      <div className="Card">
        <img className="imgCard" src={data[1].img} alt="imgCard"/>
        <p className="titleCard" >{data[1].title}</p>
        <p className="descCard">{data[1].descripcion}</p>
        <a className="buttonCard" href="# ">Ver</a>
      </div>
      <div className="Card">
        <img className="imgCard" src={data[2].img} alt="imgCard"/>
        <p className="titleCard">{data[2].title}</p>
        <p className="descCard">{data[2].descripcion}</p>
        <a className="buttonCard" href="# ">Ver</a>
      </div>
    </div>
  );
}
export default Producto;
