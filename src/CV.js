import React from "react";
import './App.css';
import PDF from './CV_2021-02-12_Daniel_Schneider.pdf';


function CV() {
  return (
    
    <div>
     
      <header>
      <div>
      <p className = "test" style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
          CV <br />
        
          <hr className="hr" />
      </p>

      </div>
      <a className = "hoverA" style = {{border:"1px solid darkgrey",borderRadius:"5px", backgroundColor: "darkgrey", color: "black", textDecoration: "none"}} href = {PDF} download>Télécharger mon CV au format PDF</a>
      <br /><br />
        
      </header>
      </div>
    
  );
}

export default CV;