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
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        types.map((type) => (
          <button onClick={() => click(type.name)} key={type.name} style={{ marginRight: "5px" }}>
            {type.name}
          </button>
        ))
      }
    </div>
  );
}
