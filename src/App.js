
import './App.css';
import './Formulaire.css';
import './index.css';
import Topbar from './Topbar'
import Accueil from './Accueil';
import Presentation from './Presentation';
import Competences from './Competences';
import Titre from './Titre';
import Box from './Box';
import Ambitions from './Ambitions';
import Veille from './Veille';
import Projets from './Projets';
import Geststages from './Geststages';
import Mskeys from './Mskeys';
import CV from './CV';
import Footer from './Footer';
import ChronoPage from './Chrono';
import Wordpress from './Wordpress';
import TableauDeBord from './TableauDeBord';
import TitreChrono from './TitreChrono';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Particles from 'react-particles-js';
import PageProgress from './lib';
import Progress from './Progress';




  
  

function App() {

  return (
      
    <div >
      
      <Router>

        <Topbar />
        
        <div id = "arriereplan" style = {{height:"200%", width:"100%"}}>
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
	            "speed": 0.50
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

        <Route exact path ="/PortfolioDS" component={Accueil}/>
        <Route exact path ="/PortfolioDS" component={Presentation}/>

        <Route exact path ="/PortfolioDS" component={Competences}/>
        <Route exact path ="/PortfolioDS" component={TitreChrono}/>
        <Route exact path ="/PortfolioDS" component={ChronoPage}/>
        <Route exact path ="/PortfolioDS" component={Titre}/>
        <Route exact path ="/PortfolioDS" component={Box}/>
        <Route exact path ="/PortfolioDS" component={Ambitions}/>

        <Route path="/Veille" component={Veille}/>
        
        <Route path="/Projets" component={Projets}/>
      
        <Route path="/CV" component={CV}/>

        
        <Route path ="/CV" component={Footer}/>
        <Route path ="/Projets" component={Footer}/>
        <Route path ="/Veille" component={Footer}/>
        <Route exact path ="/PortfolioDS" component={Footer}/>

        <Route exact path ="/TableauDeBord" component = {TableauDeBord}/>
        <Route exact path ="/Geststages" component = {Geststages}/>
        <Route exact path ="/Wordpress" component = {Wordpress}/>
        <Route exact path ="/Mskeys" component = {Mskeys}/>

        </div>
      
      </Router>

    </div>
  );
}

export default App;
