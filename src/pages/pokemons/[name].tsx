import { NextPage } from "next";
import styles from "./pokemonDetails.module.scss";
import { Header } from "../../../components/Header/Header";
import { Container } from "../../../components/Container/Container";
import { Footer } from "../../../components/Footer/Footer";
import { useRouter } from "next/router";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { pokemonNumber } from "@/utilities/pokemonNumber";
import { Type } from "../../../components/Type/Type";
import { Stat } from "../../../components/Stat/Stat";
import { Stats } from "../../../components/Stats/Stats";

const pokemonDetails: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const { isLoading, error, data } = usePokemonDetails(
    "https://pokeapi.co/api/v2/pokemon/" + name
  );

  if (isLoading) {
    return <div>cargando</div>;
  }

  if (error || data === undefined) {
    return <div>Error</div>;
  }

  const height =
    data !== undefined ? data?.height / 10 + " m" : "No especificada";

  const weight =
    data !== undefined ? data?.weight / 10 + " kg" : "No especificado";

  return (
    <div>
      <Header />

      <Container>
        <div className={styles.titleContainer}>
          <h2 className={styles.name}>{data?.name}</h2>
          <span className={styles.number}>
            N.º {pokemonNumber(data?.id as number)}
          </span>
        </div>
        <div className={styles.pokemonDetails}>
          <img src={data?.imageUrl} className={styles.image} alt="" />
          <div className={styles.infoContainer}>
            <div>
              <div className={styles.statsContainer}>
                <div>
                  <span className={styles.statName}>Altura: </span>
                  <span>{height}</span>
                </div>
                <div>
                  <span className={styles.statName}>Peso: </span>
                  <span>{weight}</span>
                </div>
                <div>
                  <span className={styles.statName}>Habilidad:</span>
                  <div className={styles.container}>
                    {data?.abilities.map((ability) => {
                      return <span>{ability}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.types}>
              <h5>Tipos:</h5>
              <div className={styles.container}>
                {data?.types.map((type) => {
                  return <Type type={type} />;
                })}
              </div>
            </div>
            <Stats stats={data.stats} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default pokemonDetails;
