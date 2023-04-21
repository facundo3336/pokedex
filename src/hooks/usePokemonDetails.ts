import { PokemonDetails, PokemonDetailsResponse } from "@/types";
import { useQuery } from "react-query";

const parsedTypes = (
  types: PokemonDetailsResponse["types"]
): PokemonDetails["types"] => {
  return types.map((type) => {
    return type.type.name;
  });
};

export const usePokemonDetails = (url: string) => {
  const fetchPokemon = async (): Promise<PokemonDetails> => {
    const response: PokemonDetailsResponse = await fetch(url).then((res) =>
      res.json()
    );

    const abilities = response.abilities.map(({ ability }) => {
      return ability.name;
    });

    const stats = response.stats.map((s) => {
      return {
        name: s.stat.name,
        stat: s.base_stat,
      };
    });

    return {
      id: response.id,
      name: response.name,
      imageUrl: response.sprites.other["official-artwork"]["front_default"],
      types: parsedTypes(response.types),
      height: response.height,
      weight: response.weight,
      stats: stats,
      abilities: abilities,
    };
  };
  return useQuery<PokemonDetails>(url, fetchPokemon);
};
