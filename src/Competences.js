import React from "react";
import './App.css';
import './Presentation.css';
import './Competences.css';

import ArrowDown from './arrowDown.png';
import './ArrowDown.css';



function Competences() {


    return (
      <div>        
        <p className="border-left" style = {{color: 'black', fontSize:45, marginBottom:150}}>
        Je m'appelle <strong>SCHNEIDER Daniel</strong>, je suis actuellement en BTS SIO option SLAM (développement), titulaire d'un bac STI2D avec mention.
        </p>
        <img className="animArrow" style = {{width:"50px"}} src = {ArrowDown} />
        <hr className="hr" />
      </div>
    );
  }
  
  export default Competences;