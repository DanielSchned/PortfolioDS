import React from "react";
import './App.css';
import ProjetStage from './ProjetStage.png';
import Geststage from './ScreenGeststage.png';
import WordpressImg from './Wordpress.png';
import Mskeys from './Ecombox.png';
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
              Projets scolaires
          </p>
        </div>

        <div>        
          <p className="test" style = {{color: 'black', fontSize:45}}>
            Développement de l'application desktop, E-combox
          </p>
        </div>
        <div className = "non">
          <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 20, color:"white"}}>L’application e-comBox permet d'installer le plus simplement possible, au sein d'un réseau d'établissement, sur un portable personnel ou chez un hébergeur en ligne (serveur OVH par exemple), plusieurs instances de différentes applications (prestashop, wordpress, mautic, odoo, kanboard, etc) sous forme de conteneurs docker : les serveurs pourront être créés à la demande en tant que de besoin</span>
          <Link to = "/Mskeys"><img className ='box oui' src={Mskeys} style = {{ width: "30%"}} /></Link>
        </div>

      
      
      
        <div>        
          <p className="test" style = {{color: 'black', fontSize:45}}>
              Gestionnaire d'événements, Wordpress
          </p>
        </div>
        <div className = "non">
          <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30, color:"white"}}>Outil de gestion d'événement.</span>
          <Link to = "/Wordpress"><img className ='box oui' src={WordpressImg} style = {{width: "30%"}} /></Link>
        </div>

        <div>        
          <p className="test" style = {{color: 'black', fontSize:35}}>
            Evolution de l’application de gestion des stages du LLB, geststage
          </p>
        </div>

        <div className = "non">
          <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30, color:"white"}}>Outil de recherche de stage, en fonction de la spécialité de l'étudiant.
            <br /><br />Language utilisés : html/css/js <br /><br />Framework utilisé : React</span>
          <Link to = "/Geststages"><img className ='box oui' src={Geststage} style = {{ width: "30%"}} /></Link>
        </div>

        <hr className="hr" />

        <div>        
          <p className="test" style = {{color: 'black', fontSize:45,textDecoration:'underline'}}>
              Projets professionel
          </p>
        </div>

        <div>        
          <p className="test" style = {{color: 'black', fontSize:35}}>
              Accès rapide aux différentes fonctionnalité d'une application administrateur, tableau de bord
          </p>
        </div>
        <div className = "non" >
          <span className = "text-position" style = {{width:"20%", textAlign:"left", marginLeft: 30, color:"white"}}>Tableau de bord en HTML5/CSS/JS et PHP pour la page ADMIN, fais lors d'un stage en entreprise, il représentait un moyen d'accéder aux différentes ressources rapidement.<br /><br />Langage utilisé : PHP<br /><br />Framework : aucun<br /><br />But : Permettre l'accès plus rapide aux sources de l'application grâce à un tableau de bord</span>
          <Link to = "/TableauDeBord"><img className ='box oui' src={ProjetStage} /></Link>
        </div>

  
      </header>
    </div>
    
  );
}

export default Projets;
