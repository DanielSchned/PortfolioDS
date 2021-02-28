import React from "react";
import './App.css';
import './Presentation.css';
import './Competences.css';

function Competences() {
    return (
      <div>        
        <p className="border-left" style = {{color: 'black', fontSize:45, marginBottom:150}}>
        Je m'appelle <strong>SCHNEIDER Daniel</strong>, je suis actuellement en BTS SIO option SLAM (développement), titulaire d'un bac STI2D avec mention.
        </p>
        <hr className="hr" />
      </div>
    );
  }
  
  export default Competences;