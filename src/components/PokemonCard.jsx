import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api-fetch";
import { formatPokemonData } from "../utils/pokemon-helper";

export default function PokemonCard({ pokemon }) {
    const [pokeInfo, setPokeInfo] = useState({ name: "", imgSrc: "", weight: "", height: "", types: [] });

    const backgroundByType = {
        water: "#6390F0",
        normal: "#A8A77A",
        fire: "#EE8130",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    };

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
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
            backgroundColor: "#eee",
            padding: "20px",
            width: "210px",
        }}>
            <p style={{ marginBottom: "20px", color: "#555" }}>{pokeInfo.paddedId}</p>

            <img src={pokeInfo.imgSrc} alt="foto pokemon" width={"150px"} height={"150px"}
                style={{ marginBottom: "20px" }}
            />
            <h1 style={{
                textTransform: "capitalize",
                marginBottom: "25px",
                backgroundColor: "#fff",
                color: "#111",
                padding: "4px 20px",
            }}>{pokeInfo.name}</h1>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "start", flexWrap: "wrap", width: "100%" }}>
                <div style={{ display: "flex" }}>
                    {pokeInfo.types.map(({ name }) => <p key={name} style={{
                        margin: "0 8px 8px 0",
                        textTransform: "capitalize",
                        color: "#fff",
                        padding: "2px 8px",
                        backgroundColor: backgroundByType[name],
                    }}>{name}</p>)}
                </div>

                <p style={{ marginBottom: "4px", color: "#555" }} >Peso: {pokeInfo.weight}</p>
                <p style={{ marginBottom: "4px", color: "#555" }} >Altura: {pokeInfo.height}</p>
            </div>
        </div>
    )
}
