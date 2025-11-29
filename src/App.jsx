import './App.css'
import { useState } from 'react';
import PokemonContainer from './components/PokemonContainer'
import TypeBar from './components/TypeBar'

function App() {
  const [type, setType] = useState("Fire");

  return (
    <>
      <h1>Pokedex</h1>

      <TypeBar setType={setType} />
      <PokemonContainer type={type} />
    </>
  )
}

export default App
