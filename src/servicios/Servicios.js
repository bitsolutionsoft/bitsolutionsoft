import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight,FaChevronLeft,} from 'react-icons/fa';
//import logo from "../assets/img/Recursos.png";
import "./../productos/producto.css";
//import codesk from "../assets/img/Recurso.png";
const cap1 = "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const cap2 = "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const cap3 = "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function Servicios() {
  const [imgActual, setimgActual] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [limitSec, setlimitSec] = useState(6)
  const [dot, setdot] = useState(0)
  const data = [
  
    {
      title: "Desarrollo de Sitios Webs",
      descripcion:
        "Creamos sitios webs, facil de usar y accesible desde cualquier lugar, mateniendo siempre disponible los 365 días del año.",
      img: cap1,
    },
    {
      title: "Soporte para Sistemas",
      descripcion:
        "Contamos un equipo muy capacitado para brindar soporte a sistemas ya existentes, para que su sistemas este actualizado.",
      img: cap2,
    },
    {
        title: "Desarrollo de Apps",
        descripcion:
          "Desarrollamos aplicaciones multiplataforma, intuitiva y facil de usar, haciendo que nuestros clientes tanga la mejor experiencia.",
        img: cap3,
    },
   
  ];
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
setseconds(seconds+1);
if(seconds===limitSec){
      if(imgActual< data.length-1)
      {
      current(imgActual+1)
      
  }else{
    current(0)
  }}

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
            current(0);
           
        } 
    }

  return (
    <div className="container">
  <div className="Cards">
        <img className="imgCard2" src={data[0].img} alt="imgCard"/>
        <p className="titleCard"  >{data[0].title}</p>
        <p className="descCard">{data[0].descripcion}</p>
        <a className="buttonCard" href="# ">Ver</a>
      </div>
      <div className="Cards">
        <img className="imgCard2" src={data[1].img} alt="imgCard"/>
        <p className="titleCard" >{data[1].title}</p>
        <p className="descCard">{data[1].descripcion}</p>
        <a className="buttonCard" href="# ">Ver</a>
      </div>
      <div className="Cards">
        <img className="imgCard2" src={data[2].img} alt="imgCard"/>
        <p className="titleCard">{data[2].title}</p>
        <p className="descCard">{data[2].descripcion}</p>
        <a className="buttonCard" href="# ">Ver</a>
      </div>
    </div>
  );
}
export default Servicios;
