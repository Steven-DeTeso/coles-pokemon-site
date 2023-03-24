import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      {/* Add more information about the Pokémon here */}
    </div>
  );
};

export default PokemonDetails;
