import React from "react";
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';

import "./App.css";

function App() {

  return (
    <div>
      <div className="title" > Not a portfolio 😋 </div>
      <div className="quote">
        <h1>"Do not be sorry. Be better." </h1>
        <div>-Kratos</div>
      </div>
      <Fade bottom>
        <h1><span className="highlight">Currently</span></h1>
        <div>
        <ul>Grinding Leetcode</ul>
        <ul><b>Groovr</b> - Meet people based on similar music taste. </ul>
        </div>
        <h1><span className="highlight">Worked on</span></h1>
        <ul>Listify</ul>
        <ul>Discord Football Bot</ul>
        <h1>I am </h1>
    </Fade>
    </div>
    
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
