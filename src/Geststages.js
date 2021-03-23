import React from "react";
import './App.css';
import './Presentation.css';
import CommitGeststages from './CommitGeststages.png';
import NewGeststages from './NewGeststages.png';
import OldGeststages from './ScreenGeststage.png';
function Geststages() {
    return (
        <div>
        <p className="test"  style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
            Geststages <br />
          
            <hr className="hr" />
        </p>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
            </div>
                <p style = {{color: 'black', fontSize:45, marginBottom:150}}>Cette application permet de gérer les stages pour les étudiants de BTS SIO de première et deuxième année </p>
        </div>
            <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Versionning, GIT 
                </p>

                
            </div>
            <img src = {CommitGeststages}/>

            <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Evolution de l'application
                </p>

                
            </div>

            <img style = {{width : "500px"}}src = {OldGeststages}/>


            <p style = {{fontSize: "45px", color :"black"}}>V</p>


            <img style = {{width : "500px"}}src = {NewGeststages}/>

        </div>
    );
  }
  
  export default Geststages;