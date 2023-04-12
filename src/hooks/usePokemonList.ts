import { useQuery } from "react-query";
import { Pokemon, PokemonListResponse, PokemonResponse } from "../types";

export const usePokemonList = (url: string) => {
  const fetchPokemonList = async () => {
    return fetch(url).then((res) => res.json());
  };
  return useQuery<PokemonListResponse>("pokemons", fetchPokemonList, {
    keepPreviousData: true,
  });
};
