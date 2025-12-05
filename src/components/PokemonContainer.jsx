import { useState, useEffect } from "react";
import { apiFetch } from "../utils/api-fetch";
import PokemonCard from "./PokemonCard";

export default function PokemonContainer({ type }) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        load();
    }, [type]);

    const load = async () => {
        const retornoAPI = await apiFetch("/type/" + type);
        setPokemons(retornoAPI.pokemon);
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", margin: "10px", justifyContent: "center" }}>
            {
                pokemons.map(({ pokemon }) => {
                    return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                })
            }
        </div>
    )
}
