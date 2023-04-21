import { usePokemon } from "@/hooks/usePokemon";
import { pokemonNumber } from "@/utilities/pokemonNumber";
import React from "react";

import { Type } from "../Type/Type";
import styles from "./Pokemon.module.scss";
import { PokemonSkeleton } from "../../skeletons/Pokemon";

interface Props {
  url: string;
}

export const Pokemon = ({ url }: Props) => {
  const { isLoading, error, data } = usePokemon(url);

  if (isLoading) {
    return <PokemonSkeleton />;
  }

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div className={styles.pokemon}>
      <img src={data?.imageUrl} className={styles.image} alt="" />
      <div className={styles.infoContainer}>
        <span className={styles.number}>
          N.º {pokemonNumber(data?.id as number)}
        </span>
        <h1 className={styles.title}>{data?.name}</h1>
        <div className={styles.types}>
          {data?.types.map((type) => {
            return <Type key={type} type={type} />;
          })}
        </div>
      </div>
    </div>
  );
};
