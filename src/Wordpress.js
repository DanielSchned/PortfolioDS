import React from "react";
import './App.css';
import './Presentation.css';
import DocWP from './DocWordpress.png';
function Wordpress() {
    return (
        <div>
        <p className="test"  style={{fontSize:80, color:'white', backgroundColor: '#2b2b2b'}}>
            Wordpress <br />
          
            <hr className="hr" />
        </p>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Contexte 
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Le Lycée Laetitia Bonaparte souhaiterait ajouter une fonctionnalité sur son site web. Différents évènements ont lieu tout au long de l’année scolaire (conférences, expositions, projections de films, journée portes ouvertes, …) et sont actuellement annoncés par l’intermédiaire d’un article sur le site. Il est impossible de visualiser tous les évènements à venir ou de gérer des inscriptions directement à partir du site dans le cas où un évènement dispose de places limitées. </p>

        </div>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
            </div>
                <p  className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>WordPress est un système de gestion de contenu (SGC ou content management system (CMS) en anglais) gratuit, libre et open-source. </p>
                

        </div>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Mission 
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Choix entre 4 plugins Wordpress de gestion d'événement, faire les caractéristiques techniques, les avantages et les inconvénients de chaque plugin, et les comparer entre eux. </p>
        </div>

        <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Documentations 
                </p>
        </div>
        <a href = "https://docs.google.com/document/d/19MD0q3xs27GALpm-gxHp62otbGXfP_jYjht-s76_oe4/edit?usp=sharing"><img src = {DocWP}/></a>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Finalité 
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Le lycée laetitia sera amené à choisir un plugin en fonction des avantages et des inconvénients relevés. </p>
        </div>
        </div>
    );
  }
  
  export default Wordpress;