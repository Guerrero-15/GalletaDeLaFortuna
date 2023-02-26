
import React, { useState } from "react";
import RandomPhrases from "./components/Phrase";
import "./App.css";
import Title from "./components/Title";
import PhrasesDelFuturo from "./assets/Phrases/phrases.json"



function App() {

  const background=[
    "url(/fondo1.jpg)",
    "url(/fondo2.jpg)",
    "url(/fondo3.jpg)",
    "url(/fondo4.jpg)",
  ]

  const [index,setIndex]=useState(0)
  const [indexBackground,setIndexBackground]=useState(0)


  const Cambio=()=>{
    if (index===PhrasesDelFuturo.length-1
      && indexBackground===PhrasesDelFuturo.length-1){

    setIndex(0)
    setIndexBackground(0)
    }else{
      const random = Math.floor( 1 + Math.random()* 9 )
      const randomBackground= Math.floor(1 + Math.random()*3)
      setIndex(random)
      setIndexBackground(randomBackground)
      
    }
  }

  return (
    <div
      className="App" 
      style={{backgroundImage:background[indexBackground]}}> 
      <Title/>
      <RandomPhrases 
      PhrasesDatas={PhrasesDelFuturo[index]}/>
      <button onClick={Cambio}>La fe es lo mas bonito que hay</button>

    </div>
  );
}

export default App;
