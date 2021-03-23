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
                        Présentation 
                    </p>
                </div>
                <p style = {{color: 'black', fontSize:45, marginBottom:150}}>C'est un tableau de bord en PHP, n'utilisant aucun framework, création des documentations utilisateur et développeur. </p>
            </div>

            <div className = "center">        
                <p className="test" style = {{color: 'black', fontSize:70}}>
                    Documentations 
                </p>
            </div>

            <ul style = {{display: "inline-block"}}>
                <li><a href = "https://drive.google.com/file/d/1KMOW26m4-1jkhiWBzXlUIAPih1aeFKev/view?usp=sharing"><img src = {DocUser}/></a></li>
                <li><a href = "https://drive.google.com/file/d/1ztu0ToMxGHiH4rDdo9BRcoPK5uttEbX3/view?usp=sharing"><img src = {DocDev}/></a></li>
            </ul>
        </div>
        
    );
  }
  
  export default TableauDeBord;