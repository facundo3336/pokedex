import Router from "next/router";
import styles from "./Nav.module.scss";

interface Props {
  isOpen: boolean;
}

export const Nav = ({ isOpen }: Props) => {
  const navContainerClasses =
    (isOpen ? styles.backgroundGrey : "") + " " + styles.navContainer;

  const navOpenClass = isOpen ? styles.navOpen : "";

  const onClickRedirect = () => {
    Router.push("/");
  };

  return (
    <div className={navContainerClasses}>
      <nav>
        <li className={styles.nav + " " + navOpenClass}>
          <div
            onClick={onClickRedirect}
            className={styles.logo}
            style={{
              backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png")`,
            }}
          ></div>
          <ul className={styles.navLink + " " + styles.red}>Pokedex</ul>
          <ul className={styles.navLink + " " + styles.orange}>
            Videojuegos y aplicaciones
          </ul>
          <ul className={styles.navLink + " " + styles.yellow}>
            Juego de cartas coleccionables
          </ul>
          <ul className={styles.navLink + " " + styles.green}>TV Pokemon</ul>
          <ul className={styles.navLink + " " + styles.cian}>Play! Pokemon</ul>
          <ul className={styles.navLink + " " + styles.blue}>Noticias</ul>
        </li>
      </nav>
    </div>
  );
};
