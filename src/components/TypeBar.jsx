import { useEffect, useState } from "react";
import { apiFetch } from "../utils/api-fetch";

export default function TypeBar({ setType }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const typesResponse = await apiFetch("/type");
    setTypes(typesResponse.results);
  };

  const click = (type) => {
    setType(type);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px" }}>
      {
        types.map((type) => (
          <button onClick={() => click(type.name)} key={type.name} style={{
            margin: "4px",
            outline: "none",
            border: "2px",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            textTransform: "capitalize",
            fontSize: "1rem"
          }}>
            {type.name}
          </button>
        ))
      }
    </div>
  );
}
