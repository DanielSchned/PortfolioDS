
import './App.css';
import './Formulaire.css';
import Topbar from './Topbar'
import Accueil from './Accueil';
import Presentation from './Presentation';
import Competences from './Competences';
import Titre from './Titre';
import Box from './Box';
import Ambitions from './Ambitions';
import Veille from './Veille';
import Projets from './Projets';
import CV from './CV';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Particles from 'react-particles-js';

function App() {
  return (
    <div >
      
      <Router>

        <Topbar />
        <div id = "arriereplan" style = {{height:"200%", width:"100%",zIndex:0}}>
        <Particles
      params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": true,
	                "value_area": 2000
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.09
	        },
	        "move": {
	            "direction": "bottom",
	            "speed": 0.20
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
      "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
           
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
           
        }
       
    }
	}} />
          </div>
          
        <div className='mise'>
          
        <Route exact path ="/" component={Accueil}/>
        <Route exact path ="/" component={Presentation}/>
        <Route exact path ="/" component={Competences}/>
        <Route exact path ="/" component={Titre}/>
        <Route exact path ="/" component={Box}/>
        <Route exact path ="/" component={Ambitions}/>
        

        <Route path="/Veille" component={Veille}/>
        <Route path="/Projets" component={Projets}/>
        <Route path="/CV" component={CV}/>

        </div>
 
      </Router>

    </div>
  );
}

export default App;