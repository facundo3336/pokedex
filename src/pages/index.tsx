import { Inter } from "next/font/google";
import styles from "./index.module.scss";
import { usePokemonList } from "../hooks/usePokemonList";
import { Pokemon } from "../../components/Pokemon/Pokemon";
import { Nav } from "../../components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoading, error, data } = usePokemonList();

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
    <div className={styles.pokemonList}>
      <Nav />
    </div>
  );
}
