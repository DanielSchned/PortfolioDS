import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import './Competences.css';
import Twitter from './Twitter.png';
import LeMonde from './LeMonde.png';
import Youtube from './Youtube.png';

import Aos from 'aos';
import "aos/dist/aos.css";


function Veille() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

    return (
        
      <div >     
        <div className="test" style={{ marginTop:'5%' ,color: 'white', fontSize:70, backgroundColor: '#2b2b2b'}}>Veille Technologique  <hr className="hr" /> </div>
       
        <div className="test" style={{ marginTop:'5%' ,color: 'white', fontSize:55, textDecoration:'underline'}}> Twitter </div>
        <img className ='box' src={Twitter} style={{marginTop: 83, height: 400, width: 400, borderRadius:10, marginLeft:'-50%'}} />
        <p className ="veille" style = {{color:'white', marginLeft:'39%', marginTop:'-20%', maxWidth:400, backgroundColor:'#2b2b2b', borderRadius: 5 }}>Je suis l'actualité sur Twitter, je suis toutes les informations qui m'intéresse tel que ReactNewsletter, Twitter est très performant car on peut recevoir un mail a chaque fois qu'il y a une nouveauté.</p>
        <div className="test" style={{ marginTop:'15%' ,color: 'white', fontSize:55, textDecoration:'underline'}}> LeMonde </div>
        <img data-aos="fade-left" className ='box' src={LeMonde} style={{marginTop: 83, height: 400, width: 400, borderRadius:10, marginLeft:'-50%'}} />
        <p data-aos="fade-left" className ="veille" style = {{color:'white', marginLeft:'39%', marginTop:'-20%', maxWidth:400, backgroundColor:'#2b2b2b', borderRadius: 5}}>Avec l'application LeMonde, je suis tenu d'actualité par ce qu'il se passe technologiquement, avec l'onglet 'pixel'</p>
        <div data-aos = 'fade-left' className="test" style={{ marginTop:'15%' ,color: 'white', fontSize:55, textDecoration:'underline'}}> Youtube </div>
        <img data-aos="fade-left" className ='box' src={Youtube} style={{marginTop: 83, height: 400, width: 400, borderRadius:10, marginLeft:'-50%'}} />
        <p data-aos="fade-left" className ="veille" style = {{color:'white', marginLeft:'39%', marginTop:'-20%', maxWidth:400, backgroundColor:'#2b2b2b', borderRadius: 5}}>Avec Youtube, je suis notifié des vidéos que les créateurs sortent, en conséquence, je suis tenu à l'actualité lorsqu'une nouveautée sort corcernant la programmation Web.</p>
        <div style = {{marginTop: 210}}><hr /></div>
      </div>
    
    );
  }
  
  export default Veille;