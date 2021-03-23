import React from "react";
import './App.css';
import './Presentation.css';
import DocMskeys from './DocMskeys.png';
function Mskeys() {
    return (
        <div>
        <p className="test"  style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
            Mskeys <br />
          
            <hr className="hr" />
        </p>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
            </div>
                <p style = {{color: 'black', fontSize:45, marginBottom:150}}>Outils de gestion  de licences Microsoft. Ces licences sont téléchargeables sous forme de lot au format XML et aucun outil de suivi (permettant de savoir quelle clé a été utilisée et sur quel poste de travail ou serveur) n’est proposé par Microsoft, et cett eaplplication permet de faire ce que microsoft ne fait pas.
 </p>
        </div>
        <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Documentations 
                </p>
        </div>

        <a href = "https://docs.google.com/document/d/1F_kMsWEyI5ucSqT_VhjZ3IkrrYdVd5ZBdbwS-_qxeZA/edit?usp=sharing"><img src = {DocMskeys}/></a>
        </div>
    );
  }
  
  export default Mskeys;