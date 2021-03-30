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
                        Contexte 
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Le lycée Laetitia propose plusieurs Sections de Techniciens Supérieurs : Services Informatiques aux Organisations (SIO), Support à l’Action Manageriale (SAM), Négociation et Digitalisation de la Relation Client (NDRC), Systèmes Numériques (SN), Comptabilité et Gestion (CG). 
 </p>
        </div>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Présentation 
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Cette application permet de gérer les stages pour les étudiants de BTS SIO de première et deuxième année </p>
        </div>
        <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Mission 
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}> Une centralisation de toutes les informations sur les stages des étudiants faciliterait d’une part la recherche d’entreprise par l’étudiant et d’autre part le suivi par l’équipe pédagogique.
Il a été décidé de faire évoluer cette application pour basculer sur des technologies actuelles (React et API GraphQL).
</p>
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

            <div>
            <div className = "center">        
                    <p className="test" style = {{color: 'black', fontSize:70}}>
                        Finalité
                    </p>
            </div>
                <p className = "test" style = {{color: 'black', fontSize:25, marginBottom:150, marginLeft:"7%", marginRight:"7%"}}>Cette application sera à la page, car l'ancienne technologie utilisée était dépassée, ce qui rend le tout plus moderne.
 </p>
        </div>
        </div>
    );
  }
  
  export default Geststages;