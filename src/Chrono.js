import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import {Chrono} from 'react-chrono';

import Aos from 'aos';
import "aos/dist/aos.css";

function ChronoPage() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

    const items = [{
      
      title: "2019",
      cardTitle: "BAC STI2D",
      cardSubtitle:"Obtention BAC avec mention",
      cardDetailedText: "BAC technologique orienté informatique(SIN)"
    },{
      title: "2020-2021",
      cardTitle: "BTS SIO",
      cardSubtitle:"Bac + 2",
      cardDetailedText: "BTS SIO option SLAM"
    },{
      title: "Janvier-Février 2021",
      cardTitle: "Stage",
      cardSubtitle:"SAGES INFORMATIQUE",
      cardDetailedText: "Stage dans une entreprise en tant que développeur"
      
    }
  
    ];
    
    
    return (
        
        <div >
            <div style={{ width: "87%", height: "650px", marginLeft:"5%" }} data-aos= "fade-up">
            <Chrono items={items} 
            mode = "VERTICAL_ALTERNATING"
            theme={{primary: "black", secondary: "lightgrey", cardBgColor: "lightgrey", cardForeColor: "black" }}
            hideControls
            />
            </div>
            
            <hr className="hr"/>
        </div>
    );
  }
  
  export default ChronoPage;
