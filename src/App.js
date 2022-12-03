import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const[nameInput, setNameInput] = useState('')
  const[nameReverse, setNameReverse] = useState('')
  const[satiras, setSatiras] = useState("");
  const msg = [`Sério... logo ${nameReverse}? Que nome Feio kkkkkk`, `${nameReverse.toUpperCase()} Triste esse nome não?`,`Pensando bem... até que da pra mudar o nome do RG de ${nameInput}, para ${nameReverse.toUpperCase()}?`, `Que dó, logo ${nameReverse.toUpperCase()} KKKKKKKKKKKKKKK. O destino certamente não gosta de você`, `${nameReverse.toUpperCase()} até que é bem fofo, não acha? kkkkkk, serio mesmo, sem Ironia :)`]
  

  

  function returnSatiras() {
    const sa = Math.floor(Math.random() * msg.length)
    setSatiras(msg[sa])
  }
  
  function reverter(){
    setNameReverse(nameInput.split('').reverse().join(''))
    document.querySelector('input[name="limpar"]').value = ""
    returnSatiras()
  }  

  return (
    <div className="App">
      <h2>Descubra como fica o seu nome de trás para frente</h2>
      <label>Infome o seu nome: </label>
      <input name="limpar" onChange={e => setNameInput(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={reverter}>Reverter Nome</button>
      <br/>
      <br/>
      <p>Seu nome: <span className="nomeReal">{nameInput}</span></p>
      <p>Resultado: <span>{nameReverse.toUpperCase()}</span></p>
      <p>{satiras}</p>
    </div>
  );

}
export default App;
