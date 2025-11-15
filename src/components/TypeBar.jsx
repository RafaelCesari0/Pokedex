import { useEffect, useState } from "react";
import { apiFetch } from "../utils/api-fetch";

export default function TypeBar() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const typesResponse = await apiFetch("/type");
    setTypes(typesResponse.results);
  };

  return (
    <>
      {types.map((type) => (
        <p key={type.name}>{type.name}</p>
      ))}

      <p>TypeBar</p>
    </>
  );
}
