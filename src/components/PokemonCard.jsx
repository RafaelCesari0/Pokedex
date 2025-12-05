import { useEffect, useState } from "react"
import { apiFetch } from "../utils/api-fetch";
import { formatPokemonData } from "../utils/pokemon-helper";

export default function PokemonCard({ pokemon }) {
    const [pokeInfo, setPokeInfo] = useState({ name: "", imgSrc: "", weight: "", height: "", types: [] });

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
            borderRadius: "4px",
            width: "180px",
        }}>
            <p style={{ marginBottom: "20px", color: "#555" }}>{pokeInfo.paddedId}</p>

            <img src={pokeInfo.imgSrc} alt="foto pokemon" width={"100px"} height={"100px"}
                style={{ marginBottom: "20px" }}
            />
            <h1 style={{
                textTransform: "capitalize",
                marginBottom: "25px",
                backgroundColor: "#fff",
                color: "#111",
                padding: "4px 20px",
                borderRadius: "4px"
            }}>{pokeInfo.name}</h1>

            <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap" }}>
                {pokeInfo.types.map(({ name }) => <p key={name} style={{
                    marginRight: "8px",
                    textTransform: "capitalize"
                }}>{name}</p>)}

                <p>Peso: {pokeInfo.weight}</p>
                <p>Altura: {pokeInfo.height}</p>
            </div>
        </div>
    )
}
