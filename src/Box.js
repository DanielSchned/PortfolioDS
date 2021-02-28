import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import './Box.css'
import Aos from 'aos';
import "aos/dist/aos.css";


function Box() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
      
      <ul style = {{listStyle: "none", display: "inline", width: "100%"}}>

        <li data-aos="fade-up" className="boxes" style = {{marginRight: 25}}> C# </li>
        <li data-aos="fade-up" className="boxes" style = {{marginRight: 25}}> PHP </li>
        <li data-aos="fade-up" className="boxes" style = {{marginRight: 25}}> Java </li>
        <li data-aos="fade-up" className="boxes" style = {{marginRight: 25}}>HTML/CSS/JS </li>

        <hr className="hr"/>
      </ul>
    );
  }
  
  export default Box;