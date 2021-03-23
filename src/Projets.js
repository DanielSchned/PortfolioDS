import React from "react";
import './App.css';
import ProjetStage from './ProjetStage.png';
import Geststage from './ScreenGeststage.png';
import WordpressImg from './Wordpress.png';
import Mskeys from './Mskeys.png';
import RPG from './ScreenRPG.png';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

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

      <div>        
        <p className="test" style = {{color: 'black', fontSize:45,textDecoration:'underline'}}>
            Projets scolaires/professionels
        </p>
      </div>

      <div>        
        <p className="test" style = {{color: 'black', fontSize:35}}>
            Accès rapide aux différentes fonctionnalité d'une application administrateur, tableau de bord
        </p>
      </div>

      <div className = "non">
      <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30}}>Tableau de bord en HTML5/CSS/JS et PHP pour la page ADMIN, fais lors d'un stage en entreprise, il représentait un moyen d'accéder aux différentes ressources rapidement.<br /><br />Langage utilisé : PHP<br /><br />Framework : aucun<br /><br />But : Permettre l'accès plus rapide aux sources de l'application grâce à un tableau de bord</span>
      <Link to = "/TableauDeBord"><img className ='box oui' src={ProjetStage} style = {{marginBottom:34}} /></Link>
      </div>

      
      <div>        
        <p className="test" style = {{color: 'black', fontSize:35}}>
          Evolution de l’application de gestion des stages du LLB, geststage
        </p>
      </div>

      <div className = "non">
      <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30}}>Outil de recherche de stage, en fonction de la spécialité de l'étudiant.
        <br /><br />Language utilisés : html/css/js <br /><br />Framework utilisé : React</span>
      <Link to = "/Geststages"><img className ='box oui' src={Geststage} style = {{marginBottom:34, width: "60%"}} /></Link>
      </div>
      
      
      <div>        
        <p className="test" style = {{color: 'black', fontSize:45}}>
            Gestionnaire d'événements, Wordpress
        </p>
      </div>
      <div className = "non">
      <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30}}>Outil de gestion d'événement.</span>
      <Link to = "/Wordpress"><img className ='box oui' src={WordpressImg} style = {{marginBottom:34, width: "60%"}} /></Link>
      </div>

      <div>        
        <p className="test" style = {{color: 'black', fontSize:45}}>
            Gestionnaire de licences Microsoft, Mskeys
        </p>
      </div>
      <div className = "non">
      <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30}}>Outil de suivi pour les licences Windows<br /><br />Language utilisés : html/css/js, PHP <br /><br />Framework utilisé : Aucun</span>
      <Link to = "/Mskeys"><img className ='box oui' src={Mskeys} style = {{marginBottom:34, width: "60%"}} /></Link>
      </div>
      
    <hr />
      <div>        
        <p className="test" style = {{color: 'black', fontSize:45,textDecoration:'underline'}}>
            Projet personnel
        </p>
      </div>
      <div>        
        <p className="test" style = {{color: 'black', fontSize:35}}>
            Jeu de rôle RPG, JAVA
        </p>
      </div>

      <div className = "non">
      <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30}}>C'est un jeu de rôle en JAVA, afin de se former sur le langage utilisé<br />Langage utilisé : JAVA</span>
      <img className ='box oui' src={RPG} style = {{marginBottom:34, width: "40%"}} />
      </div>

      </header>
      </div>
    
  );
}

export default Projets;
