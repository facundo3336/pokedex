import { Button } from "../Button/Button";
import styles from "./Search.module.scss";
import { RxMagnifyingGlass } from "react-icons/rx";

export const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.titleAndInputContainer}>
        <h5>Nombre o numero</h5>
        <div className={styles.inputContainer}>
          <input type="text" />
          <Button fontSize="xl" onClick={() => {}} color="search">
            <RxMagnifyingGlass />
          </Button>
        </div>
      </div>
      <div className={styles.extraText}>
        <p>
          Busca un Pokemon por su nombre o usando su numero en la pokedex
          nacional
        </p>
      </div>
    </div>
  );
};
