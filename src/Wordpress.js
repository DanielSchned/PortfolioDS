import React from "react";
import './App.css';
import './Presentation.css';
import DocWP from './DocWordpress.png';
function Wordpress() {
    return (
        <div>
        <p className="test"  style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
            Wordpress <br />
          
            <hr className="hr" />
        </p>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
            </div>
                <p style = {{color: 'black', fontSize:45, marginBottom:150}}>WordPress est un système de gestion de contenu (SGC ou content management system (CMS) en anglais) gratuit, libre et open-source. </p>
        </div>
        <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Documentations 
                </p>
        </div>
        <a href = "https://docs.google.com/document/d/19MD0q3xs27GALpm-gxHp62otbGXfP_jYjht-s76_oe4/edit?usp=sharing"><img src = {DocWP}/></a>
        </div>
    );
  }
  
  export default Wordpress;