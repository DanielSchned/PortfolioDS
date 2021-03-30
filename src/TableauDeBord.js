import React from "react";
import './App.css';
import './Presentation.css';
import './Competences.css';

import DocUser from './DocUser.png';
import DocDev from './DocDev.png';


function TableauDeBord() {
    return (
        
        <div>
            
        <p className="test"  style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
            Tableau de bord <br />
          
            <hr className="hr" />
        </p>
        <div>
        
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Contexte 
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>L'entreprise SAGES informatique, au niveau de leur interface administrateur, sera ammené à implémenter un tableau de bord, qui permettra l'accès aux informations des autres pages de l'interface rapidement.
 </p>
        </div>
            <div>
                <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
                </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>C'est un tableau de bord en PHP, n'utilisant aucun framework, création des documentations utilisateur et développeur. </p>
            </div>

            <div>
                <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Mission 
                    </p>
                </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Développement d'une page, qui permet la centralisation de données de l'interface, codé en php, cette page est soumise a plusieurs conditions, comme l'homogénisation aveec l'interface ainsi que la ressemblance avec le tableau de bord client.</p>
            </div>

            <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Documentations 
                </p>
            </div>

            <ul style = {{display: "inline-block"}}>
                <li><a href = "https://drive.google.com/file/d/1KMOW26m4-1jkhiWBzXlUIAPih1aeFKev/view?usp=sharing"><img style = {{width: "400px"}} src = {DocUser}/></a></li>
                <li><a href = "https://drive.google.com/file/d/1ztu0ToMxGHiH4rDdo9BRcoPK5uttEbX3/view?usp=sharing"><img style = {{width: "400px"}} src = {DocDev}/></a></li>
            </ul>

            <div>
                <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Finalité 
                    </p>
                </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Actuellement en production, cette page sera par la suite intégrée dans l'interface car ça reste un besoin réel, et qui sera utile dans le futur.</p>
            </div>
        </div>
        
    );
  }
  
  export default TableauDeBord;