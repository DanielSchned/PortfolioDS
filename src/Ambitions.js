import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import './Box.css'
import './Competences.css';
import './Transitions.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function Ambitions() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
      <div className="center"> 
        <div>       
          <p data-aos="fade-up" className="test" style = {{color: 'black', fontSize:70}}>Ambitions</p>
        <ul style = {{textAlign:'center'}}>
          <li data-aos="fade-down" className="borderleft" style = {{color: 'black', fontSize:45, width: '30%', marginBottom:15}}>J'aimerais intégrer la licence à corte de developpeur fullstack</li>
          <li data-aos="fade-down" className="borderleft" style = {{color: 'black', fontSize:45, width: '30%', marginBottom:15}}>Je souhaite à la fin de mes études, de rentrer dans une équipe de developpeurs</li>
          <li data-aos="fade-down" className="borderleft" style = {{color: 'black', fontSize:45, width: '30%', marginBottom:15}}>Je souhaite à la fin de mes études, de rentrer dans une équipe de developpeurs</li>
        </ul>
        
        </div>
        <hr className="hr"/>
      </div>
    );
  }
  
  export default Ambitions;