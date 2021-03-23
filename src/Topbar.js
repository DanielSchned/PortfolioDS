import React from "react";
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import './Topbar.css';
import './Transitions.css';
import { Link } from 'react-router-dom';


function Topbar() {

  return (    
    <div >
        <AppBar style={{backgroundColor:"#1f2021"}}>
          <Toolbar >
            <Typography>
           
            <ul style ={{display: 'flex'}}>
                    <li className="police-portfolio" style={{listStyle:'none',  marginTop:10, fontSize:25}}>PORTFOLIO</li>
                    <li className="style" style={{listStyle:'none',  marginTop:10, fontSize:25}}><Link to = "/PortfolioDS"><Button style = {{color: 'grey'}}><a>A propos de moi</a></Button></Link></li>
                    <li className="style" style={{listStyle:'none',  marginTop:10, fontSize:25}}><Link to = "/Veille"><Button style = {{color: 'grey'}}>Veille Technologique</Button></Link></li>
                    <li className="style" style={{listStyle:'none',  marginTop:10, fontSize:25}}><Link to = "/CV"><Button style = {{color: 'grey'}}>CV</Button></Link></li>
                    <li className="style" style={{listStyle:'none',  marginTop:10, fontSize:25}}><Link to = "/Projets"><Button style = {{color: 'grey'}}>Projets</Button></Link></li>
                    
            </ul>
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default Topbar;