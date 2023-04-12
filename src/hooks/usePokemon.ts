import { Pokemon, PokemonResponse } from "@/types";
import { useQuery } from "react-query";

const parsedTypes = (types: PokemonResponse["types"]): Pokemon["types"] => {
  return types.map((type) => {
    return type.type.name;
  });
};

export const usePokemon = (url: string) => {
  const fetchPokemon = async (): Promise<Pokemon> => {
    const response: PokemonResponse = await fetch(url).then((res) =>
      res.json()
    );

    return {
      id: response.id,
      name: response.name,
      imageUrl: response.sprites.other["official-artwork"]["front_default"],
      types: parsedTypes(response.types),
    };
  };
  return useQuery<Pokemon>(url, fetchPokemon);
};
