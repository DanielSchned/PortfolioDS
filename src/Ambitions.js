import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import './Box.css'
import './Competences.css';
import './Transitions.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Grid from '@material-ui/core/Grid';

function Ambitions() {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
      <div className="center"> 
        <div>       
          <p data-aos="fade-up" className="test" style = {{color: 'black', fontSize:70}}>Ambitions</p>
          
          <p data-aos="fade-up" className="paragraphe" style = {{color: 'black', fontSize:45, marginBottom:15, marginLeft:"7%", marginRight:"7%"}}>J'aimerais intégrer la licence à corte, puis continuer mes études vers le développeur fullstack si possible</p>
          <p data-aos="fade-up" className="paragraphe" style = {{color: 'black', fontSize:45, marginBottom:75, marginLeft:"7%", marginRight:"7%"}}>Je souhaite à la fin de mes études, de rentrer dans une équipe de developpeurs</p>

        
        </div>
      </div>
    );
  }
  
  export default Ambitions;