import React from "react";
import './App.css';
import PDF from './CV_2021-03-05_Daniel_Schneider.pdf';
import ScreenPDF from './ScreenCV.png';


function CV() {
  return (
    
    <div>
     
      <header>
      <div>
      <p className = "test" style={{ marginTop:'81px',fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
          CV <br />
        
          <hr className="hr" />
      </p>

      </div>
      <div>        
        <p className="test" style = {{color: 'black', fontSize:45}}>
            Mon CV
        </p>
      </div>
      <div>
      <img src={ScreenPDF} style={{borderRadius:10}} />
      </div>
      <hr />
      <p style = {{color: "black"}}>Lien pour télécharger mon CV en PDF :</p>
      <a className = "hoverA" style = {{border:"1px solid darkgrey",borderRadius:"5px", backgroundColor: "darkgrey", color: "black", textDecoration: "none"}} href = {PDF} download>Télécharger mon CV au format PDF</a>
      <br /><br />
        
      </header>
      </div>
    
  );
}

export default CV;