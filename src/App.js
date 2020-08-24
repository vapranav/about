import React from "react";
import ReactDOM from "react-dom";


import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="title" > Not a portfolio 😋 </div>
      <h1> Currently</h1>
      <div>
      <ul>Grinding Leetcode</ul>
      <ul><b>Groovr</b> - Meet people based on similar music taste. </ul>
      </div>
      <h1> Worked on</h1>
      <ul>Listify</ul>
      <ul>Discord Football Bot</ul>
      <h1>I am </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
