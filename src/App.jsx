import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
function App() {
  
   const[isgamestarted,setIsgamestared] =useState(true)
   const toggleGamePlay=() =>{
    setIsgamestared((prev)=>!prev);
   }
  return (
    <>
    {isgamestarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    
    </>
  );
}

export default App
