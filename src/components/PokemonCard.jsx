import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api-fetch";
import { formatPokemonData } from "../utils/pokemon-helper";

export default function PokemonCard({ pokemon }) {
    const [pokeInfo, setPokeInfo] = useState({ name: "", img: "" });

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const number = pokemon.url.split("/")[6];
        const data = await apiFetch(`/pokemon/${number}`);
        const formatedData = formatPokemonData(data);
        setPokeInfo(formatedData);
    }

    return (
        <div style={{  }}>
            <img src={pokeInfo.imgSrc} alt="foto pokemon" width={"100px"} height={"100px"}/>
            <label style={{
                margin: "10px", backgroundColor: "#111", color: "#ddd", padding: "4px 8px"
            }}>{pokemon.name}</label>
        </div>
    )
}
