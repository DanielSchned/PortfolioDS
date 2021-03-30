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
                        Contexte 
                    </p>
            </div>
                <p className="test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>La réforme du BTS MUC en BTS MCO impose l’enseignement de la digitalisation de la relation client. Aussi, les professeurs doivent mettre à disposition de leurs élèves d’un certain nombre de sites dont des sites e-commerce (Prestashop, Mautic, Wordpress, etc.), de gestion de relation clients, de gestion de projets, etc. 
 </p>
        </div>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
            </div>
                <p className="test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>L’application e-comBox est elle-même une application Web “dockérisée” installable sur n’importe quel système d’exploitation (Windows 10 Pro, Linux et MacOS) qui permet de lancer et gérer le ou les conteneurs dans lesquels le service est installé.
 </p>
        </div>
        <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Modifications 
                </p>
        </div>

        <img style = {{width : "50%"}} src = {ScreenEcombox}/>
        
        </div>
    );
  }
  
  export default Mskeys;