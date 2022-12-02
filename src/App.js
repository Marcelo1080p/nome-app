import React, { useState, useEffect } from "react";

function App() {
  const[nameInput, setNameInput] = useState('')
  const[nameReverse, setNameReverse] = useState("")
  useEffect(() =>{
    reverter()
  },)
  function reverter(){
    setNameReverse(nameInput.split('').reverse().join('').toUpperCase())
  }  

  return (
    <div className="App">
      <label>Infome o seu nome: </label>
      <input onChange={e => setNameInput(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={reverter}>Reverter Nome</button>
      <br/>
      <br/>
      <p>Seu nome: <span>{nameInput.toUpperCase()}</span></p>
      <p>Seu nome de trás para frente: {nameReverse}</p>
    </div>
  );

}
export default App;
