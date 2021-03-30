import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function Titre() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
    return (
      
      <div className = "center">        
        <p data-aos='fade-up' className = "test" style = {{color: 'black', fontSize:70}}>
            Compétences
        </p>
      </div>
    );
  }
  
  export default Titre;
