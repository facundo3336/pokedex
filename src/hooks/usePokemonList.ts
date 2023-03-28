import { useQuery } from "react-query";
import { Pokemon, PokemonListResponse, PokemonResponse } from "../types";

export const usePokemonList = () => {
  const fetchPokemonList = async () => {
    return fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json());
  };
  return useQuery<PokemonListResponse>("pokemons", fetchPokemonList);
};
