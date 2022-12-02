import React from "react";
import { useState } from "react";


function App() {
  const[nameInput, setNameInput] = useState(null)


  return (
    <div className="App">
      <label>Infome o seu nome: </label>
      <input onChange={e => setNameInput(e.target.value)}/>
      <br/>
      <br/>
      <button >Reverter Nome</button>
      <br/>
      <br/>
      <p>Seu nome: {nameInput}</p>
      <p>Seu nome De trás para frente: </p> <p>{""}</p>
    </div>
  );
}

export default App;
