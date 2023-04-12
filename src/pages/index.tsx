import styles from "./index.module.scss";
import { usePokemonList } from "../hooks/usePokemonList";
import { Button } from "../../components/Button/Button";
import { Pokemon } from "../../components/Pokemon/Pokemon";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { InfoBox } from "../../components/Info-box/Info-box";

export default function Home() {
  const { isLoading, error, data } = usePokemonList(
    "https://pokeapi.co/api/v2/pokemon"
  );

  if (data === undefined) {
    return <div>No data</div>;
  }

  if (isLoading) {
    return <div>Cargando</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Header />
      <Container>
        <section className={styles.pokemonListSection}>
          <div className={styles.pokemonList}>
            {data.results.map((p) => {
              return <Pokemon key={p.name} url={p.url} />;
            })}
          </div>
          <Button color={"cian"} onClick={() => {}}>
            Cargar mas Pokemon
          </Button>
        </section>
        <section>
          <div className={styles.infoBoxSectionContainer}>
            <InfoBox
              color="yellow"
              imgUrl="https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/video-games/_tiles/pokemon-go/2023/04042023/pokemon-go-169.png"
              title="Cutiefly y Rebombee"
              paragraph="El debut de un pokemon mosca abeja, un desafio de coleccion y mas en el evento florece la primavera"
            />
            <InfoBox
              color="green"
              imgUrl="https://pokemonalpha.xyz/wp-content/uploads/2023/03/Community-Day-Togetic.jpg"
              title="Enfrenta a Togetic en Pokemon Go"
              paragraph="Togetic esparce felicidad en el Día de la Comunidad de Pokémon GO en el mes de abril"
            />
            <InfoBox
              color="black"
              imgUrl="https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/video-games/_tiles/pokemon-scarlet-violet/distributions/lechonk/lechonk-169-es.png"
              title="Lechonk aterriza en GAME"
              paragraph="Celebrad Pokemon con un Lechonk de teratipo volador y muchas otras incursiones!"
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
