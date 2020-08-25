import React from "react";
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';

import "./App.css";

function App() {

  return (
    <div>
        <div className="title" > Not a portfolio 😋 </div>
        <div className="quote">
        <h1>"Your boos mean <span className="nothing">nothing</span>, I've seen what makes you cheer." </h1>
        <div>- Rick Sanchez</div>
      </div>
      <Fade bottom>
        <h1><span className="highlight">Currently</span></h1>
        <div>
        <ul>Grinding Leetcode</ul>
        <ul><b>Groovr</b> - Meet people with similar music taste </ul>
        </div>
        <h1><span className="highlight">Worked on</span></h1>
        <ul><a href="https://list-ify.herokuapp.com/">Listify</a>- A productivity app.</ul>
        <ul><a href= "">Discord Football Bot</a>- Get live scores from all major leagues</ul>
        <h1><span className="highlight">I am ...</span></h1>
        </Fade>
        <Fade left>
        <p>an <span className="nothing">undergraduate</span> pursuing a degree in Computer Science at VIT Vellore (Class of '22)</p>
        </Fade>
        <Fade right>
        <p>
          probably <span className="nothing">listening</span> to Jeremy Zucker right now.
        </p>
        </Fade>
        <Fade left>
        <p>available for <span className="nothing">collab</span>!</p>
        </Fade>
        <Fade bottom>
        <h1><span className="highlight">Find me @</span></h1>
        <div className="logos">
        <a href="https://www.instagram.com/vapranav/?hl=en"><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/vapranav"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/pranav-v-a-a566031a4/"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://twitter.com/PranavVA1"><i className="fab fa-twitter"></i></a>

        
        
        
        </div>
        </Fade>
        <p className="copy">Copyrighted? Copyrighted.</p>  
    </div>
    
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
