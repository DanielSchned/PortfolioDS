import React from "react";
import './App.css';
import './Presentation.css';
import ScreenEcombox from './ScreenEcombox.png';
function Mskeys() {
    return (
        <div>
        <p className="test"  style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
            E-combox <br />
          
            <hr className="hr" />
        </p>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
            </div>
                <p style = {{color: 'black', fontSize:45, marginBottom:150}}>L’application e-comBox est elle-même une application Web “dockérisée” installable sur n’importe quel système d’exploitation (Windows 10 Pro, Linux et MacOS) qui permet de lancer et gérer le ou les conteneurs dans lesquels le service est installé.
 </p>
        </div>
        <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Modifications 
                </p>
        </div>

        <img src = {ScreenEcombox}/>
        </div>
    );
  }
  
  export default Mskeys;