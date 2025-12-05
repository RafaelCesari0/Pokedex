import './App.css'
import { useState } from 'react';
import PokemonContainer from './components/PokemonContainer'
import TypeBar from './components/TypeBar'

function App() {
  const [type, setType] = useState("Fire");

  return (
    <>
      <h1 style={{
        fontSize: "2rem",
        fontWeight: "normal",
        margin: "40px 0",
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px"
      }}>Pokedex</h1>

      <TypeBar setType={setType} />
      <PokemonContainer type={type} />
    </>
  )
}

export default App
