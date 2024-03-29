import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import './Competences.css';
import Twitter from './Twitter.png';
import LeMonde from './LeMonde.png';
import Youtube from './Youtube.png';

import PreuveTwitter from './ScreenTwitter.png';
import PreuveLeMonde from './ScreenLeMonde.png';
import PreuveYoutube from './ScreenYoutube.png';

import Aos from 'aos';
import "aos/dist/aos.css";


import ArrowDown from './arrowDown.png';
import './ArrowDown.css';


function Veille() {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

    return (
        
      <div >     
        <div className="test" style={{ marginTop:'81px' ,color: 'white', fontSize:80, backgroundColor: '#2b2b2b'}}>Veille Technologique  <hr className="hr" /> </div>
       
        <div className="test" style={{ marginTop:'5%' ,color: 'black', fontSize:55, textDecoration:'underline'}}> Twitter </div>
        <img className ='box' src={Twitter} style={{marginTop: 83, height: 400, width: 400, borderRadius:10, marginLeft:'-70%'}} />

        <div style={{marginLeft: "35%", textAlign:"left"}}>
        <p className ="veille" style = {{color:'white', marginTop:'-400px', maxWidth:600, backgroundColor:'#2b2b2b', borderRadius: 5 }}>Je suis toutes les informations qui m'intéresse sur Twitter tel que ReactNewsletter, ce réseau est très performant car il est possible de recevoir un mail à chaque nouveauté. Il sert égamelement à suivre l'actualité générale sur les langages de programmations WEB, c'est-à-dire les nouveautés en React, PHP etc..</p>
        <img data-aos="fade-left" className ='box' src={PreuveTwitter} style = {{borderRadius:5}}/>
        </div>
        <img className="animArrow" style = {{width:"50px", marginTop:"4%"}} src = {ArrowDown} />

        <div className="test" style={{ marginTop:'7%' ,color: 'black', fontSize:55, textDecoration:'underline'}}> LeMonde </div>
        <img data-aos="fade-left" className ='box' src={LeMonde} style={{marginTop: 83, height: 400, width: 400, borderRadius:10, marginLeft:'-70%'}} />

        <div style={{marginLeft: "35%", textAlign:"left"}}>
        <p data-aos="fade-left" className ="veille" style = {{color:'white', marginTop:'-400px', maxWidth:600, backgroundColor:'#2b2b2b', borderRadius: 5 }}>Avec l'application LeMonde, il est possible de suivre l'actualité technologique avec l'onglet 'pixel'. Nombreuses informations sont essentielles, mais généralement, cela tourne autour de la cybersécurité, avec notamment la fuite de 500000 données médicales le 24 février 2021</p>
        <img data-aos="fade-left" className ='box' src={PreuveLeMonde} style = {{borderRadius:5}}/>
        </div>

        <div data-aos = 'fade-left' className="test" style={{ marginTop:'15%' ,color: 'black', fontSize:55, textDecoration:'underline'}}> Youtube </div>
        <img data-aos="fade-left" className ='box' src={Youtube} style={{marginTop: 83, height: 400, width: 400, borderRadius:10, marginLeft:'-70%'}} />

        <div style={{marginLeft: "35%", textAlign:"left"}}>
        <p data-aos="fade-left" className ="veille" style = {{color:'white', marginTop:'-400px', maxWidth:600, backgroundColor:'#2b2b2b', borderRadius: 5 }}>Avec Youtube, lorsque de nouvelles vidéos sont publiées, il existe un système de notification qui permet de toujours rester d'actualité. En conséquence, celui-ci indique lorsqu'une vidéo concernant la programmation WEB est mise en ligne sur la platforme. Notamment avec la chaîne "Le designer du web" qui en plus de faire des tutoriels, il informe sur des nombreuses pratiques qui peuvent être réalisées en programmagion WEB.</p>
        <img data-aos="fade-left" className ='box' src={PreuveYoutube} style = {{borderRadius:5}}/>
        </div>

        <div style = {{marginTop: 450}}></div>
      </div>
    
    );
  }
  
  export default Veille;