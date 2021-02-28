import React from "react";
import './App.css';
import ProjetStage from './ProjetStage.png';
import Mskeys from './Mskeys.png';

function Projets() {
  return (
    
    <div>
     
      <header>
      <div>
      <p className="test"  style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
          Projets <br />
        
          <hr className="hr" />
      </p>

      </div>
      
      <div className = "non">
      <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30}}>Tableau de bord en HTML5/CSS/JS et PHP pour la page ADMIN, fais lors d'un stage en entreprise, il représentait un moyen d'accéder aux différentes ressources rapidement.</span>
      <img className ='box oui' src={ProjetStage} style = {{marginBottom:34}} />
      </div>

      <div className = "non">
      <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30}}>Le lycée Laetitia Bonaparte dispose d’un abonnement Azure Dev Tools For Teaching et bénéficie ainsi de licences pour de nombreux outils Microsoft comme notamment les systèmes d’exploitation Windows 10 et Windows Server 2019.
Ces licences sont téléchargeables sous forme de lot au format XML et aucun outil de suivi (permettant de savoir quelle clé a été utilisée et sur quel poste de travail ou serveur) n’est proposé par Microsoft.</span>
      <img className ='box oui' src={Mskeys} style = {{marginBottom:34, width: "60%"}} />
      </div>

      </header>
      </div>
    
  );
}

export default Projets;
