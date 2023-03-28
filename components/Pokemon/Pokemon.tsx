import { usePokemon } from "@/hooks/usePokemon";
import { pokemonNumber } from "@/utilities/pokemonNumber";
import React from "react";
import ContentLoader from "react-content-loader";
import { Type } from "../Type/Type";
import styles from "./Pokemon.module.scss";

interface Props {
  url: string;
}

export const Pokemon = ({ url }: Props) => {
  const { isLoading, error, data } = usePokemon(url);

  if (isLoading) {
    return (
      <ContentLoader
        speed={2}
        width={280}
        height={280}
        viewBox="0 0 280 280"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="544" y="322" rx="3" ry="3" width="88" height="6" />
        <rect x="555" y="317" rx="3" ry="3" width="52" height="6" />
        <rect x="10" y="213" rx="2" ry="2" width="40" height="10" />
        <rect x="104" y="351" rx="3" ry="3" width="117" height="5" />
        <rect x="32" y="356" rx="2" ry="2" width="72" height="7" />
        <rect x="10" y="234" rx="2" ry="2" width="163" height="16" />
        <rect x="10" y="259" rx="2" ry="2" width="68" height="9" />
        <rect x="80" y="259" rx="2" ry="2" width="68" height="9" />
        <rect x="10" y="2" rx="0" ry="0" width="230" height="199" />
      </ContentLoader>
    );
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
